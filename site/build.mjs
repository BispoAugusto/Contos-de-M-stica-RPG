import { readdir, readFile, mkdir, writeFile, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';
import { navigationFor } from './navigation.mjs';

const root = path.resolve(import.meta.dirname, '..');
const out = path.join(root, 'dist');
const ignored = new Set(['node_modules', 'dist', '.git', '.vercel']);
async function walk(dir) {
  const results = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (ignored.has(entry.name) || entry.isSymbolicLink()) continue;
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...await walk(file));
    else if (/\.md$/i.test(entry.name)) results.push(file);
  }
  return results;
}
const docs = [];
for (const file of await walk(root)) {
  const id = path.relative(root, file).split(path.sep).join('/');
  const markdown = await readFile(file, 'utf8');
  const title = markdown.match(/^#\s+(.+)$/m)?.[1] || path.basename(id, '.md');
  let updated = '';
  try { updated = execFileSync('git', ['log', '-1', '--format=%cs', '--', id], { cwd: root, encoding: 'utf8' }).trim(); } catch {}
  docs.push({ id, title, ...navigationFor(id, markdown), updated,
    text: markdown, html: sanitizeHtml(marked.parse(markdown), {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'input', 'del']),
      allowedAttributes: { ...sanitizeHtml.defaults.allowedAttributes, input: ['type', 'checked', 'disabled'], img: ['src', 'alt', 'title'], '*': ['id'] }
    }) });
  const target = path.join(out, 'markdown', id);
  await mkdir(path.dirname(target), { recursive: true });
  await copyFile(file, target);
}
docs.sort((a, b) => a.groupOrder - b.groupOrder || a.order - b.order || a.title.localeCompare(b.title, 'pt-BR'));
await mkdir(out, { recursive: true });
for (const file of ['index.html', 'style.css', 'app.js']) await copyFile(path.join(root, 'site', file), path.join(out, file));
await writeFile(path.join(out, 'documents.json'), JSON.stringify(docs));
console.log(`Portal gerado: ${docs.length} documentos Markdown em dist/.`);
