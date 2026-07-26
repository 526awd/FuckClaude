import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

const DIST = resolve('dist/client');

function walkDir(dir) {
  const entries = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      entries.push(...walkDir(full));
    } else if (entry.endsWith('.html')) {
      entries.push(full);
    }
  }
  return entries;
}

const htmlFiles = walkDir(DIST);
let patched = 0;

for (const htmlFile of htmlFiles) {
  let html = readFileSync(htmlFile, 'utf-8');

  html = html.replace(
    /<script type="module" src="(\/assets\/[^"]+\.js)"><\/script>/g,
    (match, src) => {
      const jsPath = join(DIST, src);
      if (!existsSync(jsPath)) {
        console.warn(`  WARN: ${src} not found, skipping`);
        return match;
      }
      const jsCode = readFileSync(jsPath, 'utf-8');
      return `<script type="module">${jsCode}</script>`;
    },
  );

  writeFileSync(htmlFile, html);
  patched++;
}

console.log(`Inlined JS into ${patched} HTML files`);
