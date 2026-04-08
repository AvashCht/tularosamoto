/**
 * Tularosa Moto — Image Fixer (v2)
 * Run from: E:\Documents\Website Extract\Fresh Again\TularosaMoto\
 * Usage:    node fix-images.js
 */

const fs   = require('fs');
const path = require('path');

const SITE_DIR    = path.resolve('.');
const DROPBOX_DIR = 'C:\\Users\\Avash Chitrakar\\Dropbox\\Tularosa Moto';
const REPORT_FILE = path.join(SITE_DIR, 'image-fix-report.txt');
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
      index.push({ fullPath: full, basename: e.name, stem: path.basename(e.name, ext).toLowerCase(), ext });
    }
  }
  walk(DROPBOX_DIR);
  console.log(`  Found ${index.length} images in Dropbox.\n`);
  return index;
}

// ── Find missing images ───────────────────────────────────────────────────────
function findMissingImages() {
  console.log('🔍  Scanning HTML files for missing images...\n');
  const needed = new Map();
  const srcRx  = /(?:src|data-src)=["']([^"']+)["']/gi;

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
        const raw = m[1].split('?')[0].trim();

        // Skip anything that isn't a relative path to an image
        if (!raw) continue;
        if (raw.startsWith('data:') || raw.startsWith('#')) continue;
        if (raw.startsWith('http://') || raw.startsWith('https://')) continue;
        if (raw.includes('http:') || raw.includes('https:')) continue; // embedded absolute

        const ext = path.extname(raw).toLowerCase();
        if (!IMG_EXTS.has(ext)) continue;

        // Must reference cdn/shop paths
        if (!raw.includes('cdn') && !raw.includes('shop') && !raw.includes('files')) continue;

        // Resolve relative to the HTML file
        let resolved;
        try {
          resolved = path.resolve(path.dirname(full), raw);
        } catch {
          continue;
        }

        // Must stay within site dir
        if (!resolved.startsWith(SITE_DIR)) continue;

        // Skip if it already exists
        if (fs.existsSync(resolved)) continue;

        // Validate the resolved path isn't absurdly long (malformed paths)
        if (resolved.length > 400) continue;

        const basename = path.basename(resolved);
        if (!needed.has(resolved)) needed.set(resolved, basename);
      }
    }
  }

  walk(SITE_DIR);
  console.log(`  Found ${needed.size} missing images.\n`);
  return needed;
}

// ── Fuzzy match ───────────────────────────────────────────────────────────────
function stripHash(stem) {
  return stem.replace(/[0-9a-f]{4}$/i, '').replace(/[-_\s]+$/, '').toLowerCase();
}

function similarity(a, b) {
  a = a.toLowerCase(); b = b.toLowerCase();
  if (a === b) return 1;
  if (b.includes(a) || a.includes(b)) return 0.9;
  let longest = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 2; j <= a.length; j++) {
      const sub = a.slice(i, j);
      if (b.includes(sub) && sub.length > longest) longest = sub.length;
    }
  }
  return longest / Math.max(a.length, b.length);
}

function findBestMatch(basename, index) {
  const missingStem = stripHash(path.basename(basename, path.extname(basename)));
  const missingExt  = path.extname(basename).toLowerCase();
  let best = null, bestScore = 0;

  // First pass: same extension
  for (const e of index) {
    if (e.ext !== missingExt) continue;
    const score = similarity(missingStem, stripHash(e.stem));
    if (score > bestScore) { bestScore = score; best = e; }
  }

  // Second pass: any extension (slight penalty)
  if (bestScore < 0.6) {
    for (const e of index) {
      const score = similarity(missingStem, stripHash(e.stem)) * 0.85;
      if (score > bestScore) { bestScore = score; best = e; }
    }
  }

  return bestScore >= 0.45 ? { match: best, score: bestScore } : null;
}

// ── Copy matched images ───────────────────────────────────────────────────────
function copyImages(needed, index) {
  console.log('📋  Matching and copying...\n');
  const report = [];
  let copied = 0, unmatched = 0;

  for (const [destPath, basename] of needed.entries()) {
    const result = findBestMatch(basename, index);

    if (!result) {
      console.log(`  ❌  No match: ${basename}`);
      report.push(`NO MATCH: ${basename}`);
      unmatched++;
      continue;
    }

    const { match, score } = result;
    const icon = score >= 0.85 ? '✅' : score >= 0.65 ? '🟡' : '⚠️ ';

    try {
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.copyFileSync(match.fullPath, destPath);
      const msg = `${icon}  ${basename}  ←  ${match.basename}  (${Math.round(score * 100)}%)`;
      console.log(`  ${msg}`);
      report.push(msg);
      copied++;
    } catch (err) {
      console.log(`  ⚠️   Error copying ${basename}: ${err.message}`);
      report.push(`ERROR: ${basename} — ${err.message}`);
    }
  }

  fs.writeFileSync(REPORT_FILE, report.join('\n'), 'utf8');
  console.log(`\n  ✅  Copied:    ${copied}`);
  console.log(`  ❌  Unmatched: ${unmatched}`);
  console.log(`  📄  Report:    image-fix-report.txt\n`);
}

// ── Main ──────────────────────────────────────────────────────────────────────
function main() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  Tularosa Moto — Image Fixer v2');
  console.log('═══════════════════════════════════════════════════');
  if (!fs.existsSync(DROPBOX_DIR)) {
    console.error(`\n❌  Dropbox not found: ${DROPBOX_DIR}\n`); process.exit(1);
  }
  const index  = buildDropboxIndex();
  const needed = findMissingImages();
  copyImages(needed, index);
  console.log('═══════════════════════════════════════════════════');
  console.log('  Done! Refresh index.html to check images.');
  console.log('═══════════════════════════════════════════════════\n');
}

main();