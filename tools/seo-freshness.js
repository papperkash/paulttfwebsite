#!/usr/bin/env node
// Regenerates llms-full.txt from the live page HTML and stamps sitemap.xml
// lastmod from each page's last git commit date. Runs locally and in the
// deploy workflow (requires full git history: checkout fetch-depth 0).
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const DOMAIN = 'https://www.thetechnologyframework.com';

const pages = [{ file: 'index.html', url: '/' }];
for (const d of fs.readdirSync(ROOT)) {
  if (d === 'framework') continue;
  const f = path.join(d, 'index.html');
  if (fs.existsSync(path.join(ROOT, f))) pages.push({ file: f, url: '/' + d + '/' });
}
for (const d of fs.readdirSync(path.join(ROOT, 'framework'))) {
  const f = path.join('framework', d, 'index.html');
  if (fs.existsSync(path.join(ROOT, f))) pages.push({ file: f, url: '/framework/' + d + '/' });
}

const gitDate = f => {
  try {
    const out = execSync('git log -1 --format=%cs -- "' + f.replace(/\\/g, '/') + '"', { cwd: ROOT }).toString().trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : null;
  } catch (e) { return null; }
};

const get = (h, re) => { const m = h.match(re); return m ? m[1].trim() : null; };
const stripText = h => h
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<(h2|h3)[^>]*>/gi, '\n\n## ')
  .replace(/<\/(h2|h3)>/gi, '\n')
  .replace(/<li[^>]*>/gi, '\n- ')
  .replace(/<\/(p|div|section|li|ul)>/gi, '\n')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&[a-z#0-9]+;/gi, ' ')
  .replace(/[ \t]+/g, ' ')
  .replace(/ ?\n ?/g, '\n')
  .replace(/\n{3,}/g, '\n\n')
  .trim();

// ---- llms-full.txt ----
let out = '# The Technology Framework: full site text\n\n';
out += '> Machine-readable full text of every page on ' + DOMAIN + '/, regenerated on deploy. Summary and facts: ' + DOMAIN + '/llms.txt\n';
for (const p of pages) {
  if (p.url === '/404.html') continue;
  const h = fs.readFileSync(path.join(ROOT, p.file), 'utf8');
  const title = get(h, /<title>([\s\S]*?)<\/title>/) || p.url;
  const desc = get(h, /<meta name="description" content="([^"]*)"/) || '';
  const date = gitDate(p.file);
  out += '\n\n---\n\n# ' + title.replace(/&amp;/g, '&') + '\n\nURL: ' + DOMAIN + p.url + (date ? '\nLast updated: ' + date : '') + (desc ? '\n\n' + desc : '') + '\n\n' + stripText(h);
}
fs.writeFileSync(path.join(ROOT, 'llms-full.txt'), out + '\n');

// ---- sitemap lastmod ----
const smPath = path.join(ROOT, 'sitemap.xml');
let sm = fs.readFileSync(smPath, 'utf8');
let stamped = 0;
sm = sm.replace(/<url>([\s\S]*?)<\/url>/g, (block) => {
  const loc = (block.match(/<loc>([^<]+)<\/loc>/) || [])[1];
  if (!loc) return block;
  const rel = loc.replace(DOMAIN, '').replace(/^\//, '').replace(/\/$/, '');
  const file = rel === '' ? 'index.html' : rel + '/index.html';
  const date = gitDate(file);
  if (!date) return block;
  stamped++;
  if (/<lastmod>/.test(block)) return block.replace(/<lastmod>[^<]*<\/lastmod>/, '<lastmod>' + date + '</lastmod>');
  return block.replace(/<\/loc>/, '</loc>\n    <lastmod>' + date + '</lastmod>');
});
fs.writeFileSync(smPath, sm);
console.log('llms-full.txt: ' + Math.round(out.length / 1024) + 'KB over ' + (pages.length - 1) + ' pages | sitemap lastmod stamped: ' + stamped);
