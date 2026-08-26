#!/usr/bin/env node
/**
 * Static site build — zero dependencies.
 *
 * Reads the content in src/data/*, renders it through src/templates/* and
 * writes plain static files (index.html, 404.html, sitemap.xml, robots.txt)
 * that GitHub Pages can serve directly. There is no runtime, no bundler and
 * no server component.
 *
 *   node build.mjs
 *   SITE_URL=https://user.github.io/repo-name node build.mjs
 */
import { writeFileSync, readFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { profile } from './src/data/profile.js';
import { experience } from './src/data/experience.js';
import { projects } from './src/data/projects.js';
import { skills } from './src/data/skills.js';
import { architecture } from './src/data/architecture.js';
import {
  education,
  certifications,
  awards,
  achievements
} from './src/data/credentials.js';
import { renderPage, render404 } from './src/templates/page.js';

const root = dirname(fileURLToPath(import.meta.url));
const siteUrl = (process.env.SITE_URL || profile.website).replace(/\/+$/, '');

const html = renderPage({
  profile,
  experience,
  projects,
  skills,
  architecture,
  education,
  certifications,
  awards,
  achievements,
  siteUrl
});

writeFileSync(join(root, 'index.html'), html);
writeFileSync(join(root, '404.html'), render404(profile));

const today = new Date().toISOString().slice(0, 10);
writeFileSync(
  join(root, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`
);

writeFileSync(
  join(root, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
);

// GitHub Pages: skip Jekyll processing so every asset is served verbatim.
writeFileSync(join(root, '.nojekyll'), '');

/* ---------------------------------------------------------------- checks */

const errors = [];
const warn = [];

// 1. Referenced local assets must exist.
const refs = new Set();
for (const m of html.matchAll(/(?:href|src|srcset)="([^"]+)"/g)) {
  for (const part of m[1].split(',')) {
    const url = part.trim().split(/\s+/)[0];
    if (!url || /^(https?:|mailto:|tel:|#|data:)/.test(url)) continue;
    refs.add(url);
  }
}
for (const ref of refs) {
  try {
    statSync(join(root, ref));
  } catch {
    errors.push(`Missing asset referenced in index.html: ${ref}`);
  }
}

// 2. No absolute-root asset paths (they break under a repository sub-path).
for (const m of html.matchAll(/(?:href|src)="\/(?!\/)([^"]*)"/g)) {
  errors.push(`Absolute root path breaks sub-path hosting: /${m[1]}`);
}

// 3. No localhost / backend references.
for (const bad of ['localhost', '127.0.0.1', '.php', 'http://0.0.0.0']) {
  if (html.includes(bad)) errors.push(`Found forbidden reference "${bad}" in output.`);
}

// 4. Every in-page anchor must resolve to a real element id.
const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
for (const m of html.matchAll(/href="#([^"]+)"/g)) {
  if (!ids.has(m[1])) errors.push(`Dead in-page link: #${m[1]}`);
}

// 5. Every image needs an alt attribute.
for (const m of html.matchAll(/<img\b[^>]*>/g)) {
  if (!/\salt="/.test(m[0])) errors.push(`<img> without alt: ${m[0].slice(0, 80)}`);
}

// 6. Heading order sanity: exactly one h1.
const h1 = [...html.matchAll(/<h1\b/g)].length;
if (h1 !== 1) errors.push(`Expected exactly one <h1>, found ${h1}.`);

// 7. External links open safely.
for (const m of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) {
  if (!/rel="[^"]*noopener/.test(m[0])) {
    errors.push(`target="_blank" without rel="noopener": ${m[0].slice(0, 80)}`);
  }
}

// 8. Resume file must be present and non-empty.
try {
  if (statSync(join(root, profile.resume.path)).size === 0) {
    errors.push('Resume PDF is empty.');
  }
} catch {
  errors.push(`Resume PDF missing at ${profile.resume.path}`);
}

const cssSize = statSync(join(root, 'assets/css/style.css')).size;
const jsSize = statSync(join(root, 'assets/js/main.js')).size;

console.log(`✓ index.html   ${(html.length / 1024).toFixed(1)} kB`);
console.log(`✓ style.css    ${(cssSize / 1024).toFixed(1)} kB`);
console.log(`✓ main.js      ${(jsSize / 1024).toFixed(1)} kB`);
console.log(`✓ 404.html, sitemap.xml, robots.txt, .nojekyll`);
console.log(`✓ base URL     ${siteUrl}  (all asset paths are relative)`);

if (warn.length) warn.forEach((w) => console.warn(`! ${w}`));
if (errors.length) {
  console.error('\nBuild checks failed:');
  errors.forEach((e) => console.error(`  ✗ ${e}`));
  process.exit(1);
}
console.log('\nAll build checks passed.');
