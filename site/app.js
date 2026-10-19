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
  $('total').textContent = `${visible.length} capítulos`;
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
    const section = document.createElement('div'); section.className = 'category';
    const title = document.createElement('h3'); title.textContent = group; section.append(title);
    for (const doc of items) { categoryNav.append(docLink(doc)); section.append(docLink(doc)); }
    $('library').append(section);
  }
  if (!matches.length) { const p = document.createElement('p'); p.textContent = 'Nenhum capítulo encontrado. Tente outro termo ou inclua histórico e desenvolvimento.'; $('navigation').append(p); }
}
function route() {
  const params = new URLSearchParams(location.hash.slice(1));
  const id = params.get('doc'); const doc = documents.find(d => d.id === id);
  $('home').hidden = Boolean(id); $('reader').hidden = !doc; $('error').hidden = !id || Boolean(doc);
  if (id && !doc) $('error').textContent = 'Documento não encontrado. Use a busca ou volte à Biblioteca.';
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
  } else document.title = 'Contos de Mística · Biblioteca do sistema';
  catalog();
  if (!params.get('section')) window.scrollTo(0, 0);
}
$('search').addEventListener('input', catalog);
$('show-development').addEventListener('change', catalog);
$('print').addEventListener('click', () => window.print());
window.addEventListener('hashchange', route);
fetch('documents.json').then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); }).then(data => { documents = data; route(); }).catch(() => { $('error').hidden = false; $('error').textContent = 'Não foi possível carregar a biblioteca. Recarregue a página ou execute o build e abra pelo servidor de prévia.'; $('count').textContent = 'Biblioteca indisponível'; });
