/**
 * Tularosa Moto — srcset Stripper
 * --------------------------------
 * The HTML has local src= paths (working) but srcset= pointing to
 * external Wayback URLs (failing). The browser uses srcset first,
 * so images don't load. This script removes all external srcsets
 * so the local src= paths take over.
 *
 * Run from: E:\Documents\Website Extract\Fresh Again\TularosaMoto\
 * Usage:    node fix-srcset.js
 */

const fs   = require('fs');
const path = require('path');

const SITE_DIR = path.resolve('.');
let   fixed    = 0;
let   files    = 0;

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) { walk(full); continue; }
    if (!/\.html?$/i.test(e.name)) continue;

    let html     = fs.readFileSync(full, 'utf8');
    let changed  = false;

    // Remove srcset attributes that contain Wayback Machine URLs
    const before = html;
    html = html.replace(/\s*srcset="[^"]*web\.archive\.org[^"]*"/gi, '');
    html = html.replace(/\s*srcset='[^']*web\.archive\.org[^']*'/gi, '');

    // Also remove srcset starting with // (protocol-relative Wayback)
    html = html.replace(/\s*srcset="\/\/web\.archive[^"]*"/gi, '');

    if (html !== before) {
      fs.writeFileSync(full, html, 'utf8');
      console.log(`  ✅  ${path.relative(SITE_DIR, full)}`);
      fixed++;
    }
    files++;
  }
}

console.log('\n🔧  Stripping external srcsets...\n');
walk(SITE_DIR);
console.log(`\n  Done! Fixed ${fixed} of ${files} HTML files.`);
console.log('  Refresh index.html — images should now load from local files.\n');
