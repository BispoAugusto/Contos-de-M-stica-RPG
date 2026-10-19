import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
const docs = JSON.parse(await readFile('dist/documents.json', 'utf8'));
const tracked = execFileSync('git', ['ls-files'], {encoding:'utf8'}).trim().split('\n').filter(f => /\.md$/i.test(f));
for (const id of tracked) assert(docs.some(d => d.id === id), id);
for (const doc of docs) {
  assert.equal(doc.text, await readFile(doc.id, 'utf8'));
  assert.equal(doc.text, await readFile('dist/markdown/' + doc.id, 'utf8'));
  assert(!/<script[\s>]/i.test(doc.html));
}
for (const id of ['CHANGELOG.md', 'ESTADO-DO-PROJETO.md', 'design/decisoes.md', 'design/pendencias.md']) assert(docs.some(d => d.id === id));
assert(docs.some(d => d.html.includes('<table>')), 'Tabelas convertidas');
// Every local reference must survive the chapter split, including old bookmarks.
function headingIds(markdown) {
  const counts = new Map(); const ids = new Set();
  for (const match of markdown.matchAll(/^#{1,6}\s+(.+)$/gm)) {
    const slug = match[1].toLowerCase().replace(/[^\p{L}\p{N}\s_-]/gu, '').replace(/\s/g, '-');
    const n = counts.get(slug) || 0; counts.set(slug, n + 1);
    ids.add(n ? `${slug}-${n}` : slug);
  }
  return ids;
}
const byId = new Map(docs.map(doc => [doc.id, doc]));
for (const doc of docs) {
  for (const match of doc.text.matchAll(/\]\(([^\s)]+)(?:\s+"[^"]*")?\)/g)) {
    const href = match[1];
    if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(href)) continue;
    const [file, anchor] = href.split('#');
    const id = file ? path.posix.normalize(path.posix.join(path.posix.dirname(doc.id), decodeURIComponent(file))) : doc.id;
    await access(id).catch(() => assert.fail(`${doc.id}: arquivo ausente ${href}`));
    if (anchor && byId.has(id)) assert(headingIds(byId.get(id).text).has(decodeURIComponent(anchor)), `${doc.id}: âncora ausente ${href}`);
  }
}
const categories = ['fundamentos', 'personagem', 'origens', 'combate', 'equipamentos', 'exploracao', 'recuperacao'];
for (const folder of categories) {
  const index = byId.get(`regras/${folder}/README.md`);
  assert(index && !index.development && !index.compatibility, `Categoria disponível: ${folder}`);
  assert(docs.some(doc => doc.id.startsWith(`regras/${folder}/`) && doc.id !== index.id && doc.group === index.group), `Capítulos classificados: ${folder}`);
}
for (const id of ['regras/combate.md', 'regras/atributos-e-testes.md', 'regras/origens-e-tracos.md']) assert(byId.get(id)?.compatibility, `Link antigo preservado: ${id}`);
assert(byId.get('design/catalogo-origens-historico.md').development, 'Histórico separado da consulta atual');
assert.equal(byId.get('referencias/criacao-de-personagem.md').group, 'Comece aqui');
console.log(`OK: ${docs.length} documentos preservados; cobertura dos Markdown, downloads, tabelas e atalhos verificados.`);
console.log('OK: sete categorias, links/âncoras, caminhos antigos e separação de histórico verificados.');
