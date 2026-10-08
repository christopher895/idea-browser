import { readFileSync, writeFileSync } from 'node:fs';

// Ordered weakest to strongest; mirrors the evidence table in docs/RESEARCH_METHOD.md.
export const LEVELS = ['concept', 'attention', 'repeated-pain', 'costly-workaround', 'existing-spend', 'paid-pilot', 'retention'];
export const VERDICTS = ['Watch', 'Interview', 'Pilot', 'Build', 'Pass'];
const SOURCE_TYPES = ['customer', 'community', 'job', 'vendor', 'review', 'government', 'research', 'news'];
const isDate = s => typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(s));
const isPartialDate = s => typeof s === 'string' && /^\d{4}(-\d{2}(-\d{2})?)?$/.test(s);
const text = s => typeof s === 'string' && s.trim();

export function validate(ideas, today = new Date().toISOString().slice(0, 10)) {
  const ids = new Set();
  for (const idea of ideas) {
    const fail = message => { throw new Error(`${idea.id}: ${message}`); };
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(idea.id) || ids.has(idea.id)) throw new Error(`Invalid or duplicate idea ID: ${idea.id}`);
    ids.add(idea.id);
    for (const key of ['name', 'title', 'summary', 'category', 'model', 'type', 'buyer', 'problem', 'solution', 'revenue', 'gap', 'timing', 'evidence', 'status']) {
      if (!text(idea[key])) fail(`missing ${key}`);
    }
    for (const key of ['risks', 'pilot']) {
      if (!Array.isArray(idea[key]) || !idea[key].length || idea[key].some(x => !text(x))) fail(`invalid ${key}`);
    }
    for (const source of idea.sources || []) {
      if (!Array.isArray(source) || source.length !== 2 || !text(source[0]) || !/^https:\/\//.test(source[1])) fail('invalid source');
    }
    if (!LEVELS.includes(idea.level ?? 'concept')) fail(`unknown level ${idea.level}`);
    if (idea.verdict !== undefined && !VERDICTS.includes(idea.verdict)) fail(`unknown verdict ${idea.verdict}`);
    if (idea.assumptions !== undefined && (!Array.isArray(idea.assumptions) || idea.assumptions.some(x => !text(x)))) fail('invalid assumptions');
    const sourceUrls = new Set((idea.sources || []).map(s => s[1]));
    let strongest = 0;
    for (const [n, e] of (idea.evidenceLog || []).entries()) {
      const where = `evidenceLog[${n}]`;
      for (const key of ['observation', 'label', 'supports', 'limitations']) if (!text(e[key])) fail(`${where} missing ${key}`);
      if (!/^https:\/\//.test(e.url || '')) fail(`${where} needs an https url`);
      if (!sourceUrls.has(e.url)) fail(`${where} url is not listed in sources`);
      if (!SOURCE_TYPES.includes(e.sourceType)) fail(`${where} unknown sourceType ${e.sourceType}`);
      if (!isDate(e.observedAt) || e.observedAt > today) fail(`${where} observedAt must be a past ISO date`);
      if (e.publishedAt != null && !isPartialDate(e.publishedAt)) fail(`${where} invalid publishedAt`);
      if (e.level !== 'context' && !LEVELS.includes(e.level)) fail(`${where} unknown level ${e.level}`);
      strongest = Math.max(strongest, LEVELS.indexOf(e.level));
    }
    if (LEVELS.indexOf(idea.level ?? 'concept') > strongest) fail(`level ${idea.level} exceeds its strongest evidence`);
    if (idea.digestReady === true) {
      if (!isDate(idea.reviewedAt) || idea.reviewedAt > today) fail('digestReady needs a past reviewedAt date');
      if (!idea.sources?.length || !idea.evidenceLog?.length) fail('digestReady needs sources and an evidenceLog');
      for (const key of ['verdict', 'verdictRationale', 'nextStep', 'sourceNote']) if (!text(idea[key])) fail(`digestReady needs ${key}`);
    }
  }
  return ideas;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const ideas = validate(JSON.parse(readFileSync(new URL('../dist/ideas.json', import.meta.url), 'utf8')));
  writeFileSync(new URL('../dist/data.js', import.meta.url), `// Generated from ideas.json by scripts/build-data.mjs.\nwindow.IDEAS = ${JSON.stringify(ideas, null, 2)};\n`);
  console.log(`Built ${ideas.length} idea briefs.`);
}
