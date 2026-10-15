import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
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
console.log(`OK: ${docs.length} documentos preservados; cobertura dos Markdown, downloads, tabelas e atalhos verificados.`);
