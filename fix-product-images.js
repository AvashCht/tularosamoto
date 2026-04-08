/**
 * Tularosa Moto — HTML Extension Image Fixer
 * --------------------------------------------
 * Product page src= attributes point to files like:
 *   GreenPants4dcc.html, BlackPants6211.html, etc.
 * These are HTML files saved with wrong extensions by HTTrack.
 * This script:
 *   1. Finds all img src= paths ending in .html inside im_ folders
 *   2. Matches the base filename to your Dropbox originals
 *   3. Copies the real image to that .html path so the browser finds it
 *
 * Run from: E:\Documents\Website Extract\Fresh Again\TularosaMoto\
 * Usage:    node fix-product-images.js
 */

const fs   = require('fs');
const path = require('path');

const SITE_DIR    = path.resolve('.');
const DROPBOX_DIR = 'C:\\Users\\Avash Chitrakar\\Dropbox\\Tularosa Moto';
const IMG_EXTS    = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.avif']);

// ── Build Dropbox index ───────────────────────────────────────────────────────
function buildDropboxIndex() {
  console.log('\n📦  Indexing Dropbox images...\n');
  const index = [];
  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) { walk(full); continue; }
      const ext = path.extname(e.name).toLowerCase();
      if (!IMG_EXTS.has(ext)) continue;
      index.push({
        fullPath: full,
        basename: e.name,
        stem: path.basename(e.name, ext).toLowerCase(),
        ext
      });
    }
  }
  walk(DROPBOX_DIR);
  console.log(`  Found ${index.length} images in Dropbox.\n`);
  return index;
}

// ── Find all img src= paths that end in .html (the broken ones) ───────────────
function findBrokenImagePaths() {
  console.log('🔍  Scanning HTML files for .html image src paths...\n');
  const needed = new Map(); // destPath (the .html file) → fake stem name

  // Match src="...im_/...something.html..." patterns
  const srcRx = /src="([^"]*im_[^"]*\/([^"/?]+)\.html)[^"]*"/gi;

  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) { walk(full); continue; }
      if (!/\.html?$/i.test(e.name)) continue;

      const html = fs.readFileSync(full, 'utf8');
      srcRx.lastIndex = 0;
      let m;

      while ((m = srcRx.exec(html)) !== null) {
        const relPath  = m[1]; // e.g. ../../../../20250123173632im_/https_.../GreenPants4dcc.html
        const fakeStem = m[2]; // e.g. GreenPants4dcc

        // Resolve to absolute path
        let resolved;
        try {
          resolved = path.resolve(path.dirname(full), relPath.split('?')[0]);
        } catch { continue; }

        if (!resolved.startsWith(SITE_DIR)) continue;
        if (resolved.length > 400) continue;

        if (!needed.has(resolved)) {
          needed.set(resolved, fakeStem);
        }
      }
    }
  }

  walk(SITE_DIR);
  console.log(`  Found ${needed.size} broken .html image paths.\n`);
  return needed;
}

// ── Fuzzy matching ────────────────────────────────────────────────────────────
function stripHash(stem) {
  return stem
    .replace(/[0-9a-f]{4}$/i, '')   // remove 4-char hex hash at end
    .replace(/_\d+x\d*$/i, '')       // remove size suffixes
    .replace(/[-_\s]+$/, '')
    .toLowerCase();
}

function similarity(a, b) {
  a = a.toLowerCase(); b = b.toLowerCase();
  if (a === b) return 1;
  if (b.includes(a) || a.includes(b)) return 0.9;
  let longest = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 3; j <= a.length; j++) {
      const sub = a.slice(i, j);
      if (b.includes(sub) && sub.length > longest) longest = sub.length;
    }
  }
  return longest / Math.max(a.length, b.length);
}

function findBestMatch(fakeStem, index) {
  const cleanStem = stripHash(fakeStem);
  let best = null, bestScore = 0;

  for (const e of index) {
    const score = similarity(cleanStem, stripHash(e.stem));
    if (score > bestScore) { bestScore = score; best = e; }
  }

  return bestScore >= 0.4 ? { match: best, score: bestScore } : null;
}

// ── Copy real images to the .html paths ───────────────────────────────────────
function fixImages(needed, index) {
  console.log('📋  Matching and fixing...\n');
  const report = [];
  let fixed = 0, unmatched = 0;

  for (const [destPath, fakeStem] of needed.entries()) {
    const result = findBestMatch(fakeStem, index);

    if (!result) {
      console.log(`  ❌  No match: ${fakeStem}`);
      report.push(`NO MATCH: ${fakeStem}`);
      unmatched++;
      continue;
    }

    const { match, score } = result;
    const icon = score >= 0.85 ? '✅' : score >= 0.65 ? '🟡' : '⚠️ ';

    try {
      // Create directory if needed
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      // Copy the real image to the .html path (browser will load it by path, not extension)
      fs.copyFileSync(match.fullPath, destPath);
      const msg = `${icon} ${fakeStem}  ←  ${match.basename}  (${Math.round(score*100)}%)`;
      console.log(`  ${msg}`);
      report.push(msg);
      fixed++;
    } catch (err) {
      console.log(`  ⚠️   Error: ${fakeStem}: ${err.message}`);
      report.push(`ERROR: ${fakeStem}: ${err.message}`);
    }
  }

  fs.writeFileSync(path.join(SITE_DIR, 'image-fix-report.txt'), report.join('\n'), 'utf8');
  console.log(`\n  ✅  Fixed:     ${fixed}`);
  console.log(`  ❌  Unmatched: ${unmatched}`);
  console.log(`  📄  Report:    image-fix-report.txt\n`);
}

// ── Main ──────────────────────────────────────────────────────────────────────
function main() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  Tularosa Moto — HTML Extension Image Fixer');
  console.log('═══════════════════════════════════════════════════');

  if (!fs.existsSync(DROPBOX_DIR)) {
    console.error(`\n❌  Dropbox not found: ${DROPBOX_DIR}\n`);
    process.exit(1);
  }

  const index  = buildDropboxIndex();
  const needed = findBrokenImagePaths();

  if (needed.size === 0) {
    console.log('  ✅  No broken .html image paths found!\n');
    return;
  }

  fixImages(needed, index);

  console.log('═══════════════════════════════════════════════════');
  console.log('  Done! Refresh product pages to check images.');
  console.log('═══════════════════════════════════════════════════\n');
}

main();
