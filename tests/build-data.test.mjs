import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { validate } from '../scripts/build-data.mjs';

const TODAY = '2026-10-08';
const entry = { observation: 'Owners describe the problem.', label: 'Forum thread', url: 'https://example.com/a', sourceType: 'community', publishedAt: '2026-05', observedAt: '2026-10-08', supports: 'Repeated pain', level: 'repeated-pain', limitations: 'Self-selected posters' };
const idea = (changes = {}) => ({
  id: 'one', name: 'One', title: 'T', summary: 'S', category: 'C', model: 'B2B', type: 'Workflow software', buyer: 'B', problem: 'P', solution: 'S', revenue: 'R', gap: 'G', timing: 'T', evidence: 'Researched report', status: 'Untested', risks: ['r'], pilot: ['p'],
  sources: [['Forum thread', 'https://example.com/a']], evidenceLog: [entry], level: 'repeated-pain', verdict: 'Interview', verdictRationale: 'Why', nextStep: 'Next', sourceNote: 'Note', reviewedAt: '2026-10-08', ...changes,
});
const rejects = (changes, pattern) => assert.throws(() => validate([idea(changes)], TODAY), pattern);

test('accepts a complete researched report and the shipped collection', () => {
  validate([idea()], TODAY);
  validate(JSON.parse(readFileSync(new URL('../dist/ideas.json', import.meta.url), 'utf8')));
});

test('level cannot exceed the strongest evidence', () => {
  rejects({ level: 'existing-spend' }, /exceeds/);
  rejects({ evidenceLog: [{ ...entry, level: 'context' }] }, /exceeds/);
  validate([idea({ level: 'concept', evidenceLog: [{ ...entry, level: 'context' }] })], TODAY);
});

test('evidence entries must be traceable and dated', () => {
  rejects({ evidenceLog: [{ ...entry, url: 'https://elsewhere.com' }] }, /not listed in sources/);
  rejects({ evidenceLog: [{ ...entry, url: 'javascript:alert(1)' }] }, /https/);
  rejects({ evidenceLog: [{ ...entry, observedAt: '2027-01-01' }] }, /observedAt/);
  rejects({ evidenceLog: [{ ...entry, sourceType: 'vibes' }] }, /sourceType/);
  rejects({ evidenceLog: [{ ...entry, limitations: '' }] }, /limitations/);
});

test('researched reports need a verdict, next step, and review date', () => {
  rejects({ verdict: undefined }, /verdict/);
  rejects({ verdict: 'Maybe' }, /unknown verdict/);
  rejects({ nextStep: '' }, /nextStep/);
  rejects({ reviewedAt: '2027-01-01' }, /reviewedAt/);
  validate([idea({ evidenceLog: [], sources: [], level: 'concept', verdict: undefined, reviewedAt: undefined })], TODAY);
});
