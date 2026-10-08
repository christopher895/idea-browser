import { readFileSync, writeFileSync } from 'node:fs';
const ideas = JSON.parse(readFileSync(new URL('../dist/ideas.json', import.meta.url), 'utf8'));
const ids = new Set();
for (const idea of ideas) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(idea.id) || ids.has(idea.id)) throw new Error('Invalid or duplicate idea ID');
  ids.add(idea.id);
  for (const key of ['name', 'title', 'summary', 'category', 'model', 'type', 'buyer', 'problem', 'solution', 'revenue', 'gap', 'timing', 'evidence', 'status']) {
    if (typeof idea[key] !== 'string' || !idea[key].trim()) throw new Error(`${idea.id}: missing ${key}`);
  }
  for (const key of ['risks', 'pilot']) {
    if (!Array.isArray(idea[key]) || !idea[key].length || idea[key].some(x => typeof x !== 'string')) throw new Error(`${idea.id}: invalid ${key}`);
  }
  for (const source of idea.sources || []) {
    if (!Array.isArray(source) || source.length !== 2 || !source[0] || !/^https:\/\//.test(source[1])) throw new Error(`${idea.id}: invalid source`);
  }
}
writeFileSync(new URL('../dist/data.js', import.meta.url), `// Generated from ideas.json by scripts/build-data.mjs.\nwindow.IDEAS = ${JSON.stringify(ideas, null, 2)};\n`);
console.log(`Built ${ideas.length} idea briefs.`);
