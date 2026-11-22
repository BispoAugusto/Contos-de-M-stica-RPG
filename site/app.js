const $ = (id) => document.getElementById(id);
const normalize = (text) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
let documents = [];
const expandedGroups = new Map();
const docLink = (doc) => { const a = document.createElement('a'); a.href = '#doc=' + encodeURIComponent(doc.id); a.textContent = doc.title; if (doc.id === new URLSearchParams(location.hash.slice(1)).get('doc')) a.setAttribute('aria-current', 'page'); return a; };
function catalog() {
  const terms = normalize($('search').value).split(/\s+/).filter(Boolean);
  const activeId = new URLSearchParams(location.hash.slice(1)).get('doc');
  const visible = documents.filter(d => !d.compatibility && ($('show-development').checked || !d.development));
  const matches = visible.filter(d => terms.every(t => normalize(d.title + ' ' + d.group + ' ' + d.id + ' ' + d.text).includes(t)));
  $('count').textContent = `${matches.length} de ${visible.length} capítulos`;
  $('total').textContent = `${matches.length} capítulos`;
  $('navigation').replaceChildren(); $('library').replaceChildren();
  const groups = [...new Set(visible.map(d => d.group))];
  for (const group of groups) {
    const items = matches.filter(d => d.group === group);
    if (!items.length) continue;
    const categoryNav = document.createElement('details'); categoryNav.className = 'nav-category';
    categoryNav.open = terms.length > 0 || items.some(d => d.id === activeId) || (expandedGroups.get(group) ?? group === 'Comece aqui');
    const heading = document.createElement('summary'); heading.textContent = group; categoryNav.append(heading);
    categoryNav.addEventListener('toggle', () => { if (categoryNav.isConnected && !terms.length) expandedGroups.set(group, categoryNav.open); });
    $('navigation').append(categoryNav);
    const section = document.createElement('details'); section.className = 'category';
    section.open = terms.length > 0;
    const title = document.createElement('summary'); title.textContent = group; section.append(title);
    for (const doc of items) { categoryNav.append(docLink(doc)); section.append(docLink(doc)); }
    $('library').append(section);
  }
  if (!matches.length) { const p = document.createElement('p'); p.textContent = 'Nenhum capítulo encontrado. Tente outro termo ou inclua o material de desenvolvimento.'; $('navigation').append(p); $('library').append(p.cloneNode(true)); }
}
function route() {
  const params = new URLSearchParams(location.hash.slice(1));
  let id = params.get('doc');
  if (id?.startsWith('referencias/') && documents.some(d => d.id === id.replace('referencias/', 'jogador/'))) {
    id = id.replace('referencias/', 'jogador/');
    params.set('doc', id);
    history.replaceState(null, '', '#' + params);
  }
  $('menu').setAttribute('aria-expanded', 'false');
  const doc = documents.find(d => d.id === id);
  $('home').hidden = Boolean(id); $('reader').hidden = !doc; $('error').hidden = !id || Boolean(doc);
  if (id && !doc) $('error').textContent = 'Documento não encontrado. Use a busca ou volte ao início do manual.';
  if (doc) {
    document.title = `${doc.title} · CdM RPG`;
    $('document-title').textContent = doc.title; $('breadcrumb').textContent = doc.group;
    $('updated').textContent = doc.updated ? `Última alteração: ${doc.updated.split('-').reverse().join('/')}` : 'Documento desta versão';
    $('source').href = 'https://github.com/BispoAugusto/Contos-de-M-stica-RPG/blob/main/' + doc.id.split('/').map(encodeURIComponent).join('/');
    $('download').href = 'markdown/' + doc.id.split('/').map(encodeURIComponent).join('/');
    $('article').innerHTML = doc.html;
    const toc = $('toc').querySelector('nav'); toc.replaceChildren();
    const used = new Map();
    $('article').querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(h => {
      const slug = h.textContent.toLowerCase().replace(/[^\p{L}\p{N}\s_-]/gu, '').replace(/\s/g, '-');
      const n = used.get(slug) || 0; used.set(slug,n+1); h.id = n ? `${slug}-${n}` : slug;
      if (h === $('article').firstElementChild && h.tagName === 'H1') h.hidden = true;
      if (h.matches('h2,h3')) { const a = document.createElement('a'); a.textContent = h.textContent; a.href = '#doc=' + encodeURIComponent(doc.id) + '&section=' + encodeURIComponent(h.id); toc.append(a); }
    });
    $('toc').hidden = !toc.children.length;
    $('article').querySelectorAll('table').forEach(table => { const wrap = document.createElement('div'); wrap.className = 'table-scroll'; table.before(wrap); wrap.append(table); });
    $('article').querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(href)) { a.rel = 'noopener'; return; }
      const base = new URL(doc.id, 'https://docs.local/'); const target = new URL(href, base);
      const targetId = decodeURIComponent(target.pathname.slice(1));
      if (documents.some(d => d.id === targetId)) a.href = '#doc=' + encodeURIComponent(targetId) + (target.hash ? '&section=' + encodeURIComponent(decodeURIComponent(target.hash.slice(1))) : '');
      else a.href = 'https://github.com/BispoAugusto/Contos-de-M-stica-RPG/blob/main/' + target.pathname.slice(1) + target.hash;
    });
    if (params.get('section')) requestAnimationFrame(() => document.getElementById(params.get('section'))?.scrollIntoView());
  } else document.title = 'Contos de Mística · Manual do jogador';
  catalog();
  if (!params.get('section')) window.scrollTo(0, 0);
  if (id && doc && document.activeElement?.closest('#side-content, #home')) $('content').focus({ preventScroll: true });
}
$('menu').addEventListener('click', () => {
  const open = $('menu').getAttribute('aria-expanded') !== 'true';
  $('menu').setAttribute('aria-expanded', String(open));
  if (open) $('search').focus();
});
document.querySelector('.skip').addEventListener('click', event => {
  event.preventDefault();
  $('content').focus();
  $('content').scrollIntoView();
});
$('search').addEventListener('input', catalog);
$('show-development').addEventListener('change', catalog);
$('print').addEventListener('click', () => window.print());
window.addEventListener('hashchange', route);
fetch('documents.json').then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); }).then(data => { documents = data; route(); }).catch(() => { $('error').hidden = false; $('error').textContent = 'Não foi possível carregar a biblioteca. Recarregue a página para tentar novamente.'; $('count').textContent = 'Biblioteca indisponível'; });
