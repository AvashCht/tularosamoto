/**
 * Tularosa Moto — Manual Image Remapper
 * ---------------------------------------
 * Uses explicit mappings for filenames that fuzzy matching got wrong.
 * Finds all .html image paths and replaces them with the correct Dropbox file.
 *
 * Run from: E:\Documents\Website Extract\Fresh Again\TularosaMoto\
 * Usage:    node fix-manual.js
 */

const fs   = require('fs');
const path = require('path');

const SITE_DIR    = path.resolve('.');
const DROPBOX_DIR = 'C:\\Users\\Avash Chitrakar\\Dropbox\\Tularosa Moto';

// ── Manual mappings: stem keyword → Dropbox relative path ────────────────────
// Key = lowercase keyword that appears in the fake filename
// Value = path relative to DROPBOX_DIR
const MANUAL_MAP = [
  // Coyote Pants
  { match: /^greenpants/i,          src: 'Images\\Product Media\\Coyote Pants\\Green Pants.jpg' },
  { match: /^blackpants/i,          src: 'Images\\Product Media\\Coyote Pants\\Black Pants.jpg' },
  { match: /^coyotecearmor/i,       src: 'Images\\Product Media\\Coyote Pants\\Coyote Pants - Black 2.jpg' },
  { match: /coyote_pants.*olive/i,  src: 'Images\\Product Media\\Coyote Pants\\Coyote Pants - Olive on Triumph.jpg' },
  { match: /coyote_pants.*black/i,  src: 'Images\\Product Media\\Coyote Pants\\Black Pants.jpg' },
  { match: /coyote_pants.*triumph/i,src: 'Images\\Product Media\\Coyote Pants\\Coyote Pants - Olive with Triumph.jpg' },

  // RL Gloves
  { match: /^rlglove-back/i,        src: 'Images\\Product Media\\RL Gloves\\RL Glove -  Back.jpg' },
  { match: /^rlglove-palm/i,        src: 'Images\\Product Media\\RL Gloves\\RL Glove -  Palm.jpg' },
  { match: /^rlglove-side/i,        src: 'Images\\Product Media\\RL Gloves\\RL Glove -  Side.jpg' },

  // RL Jacket
  { match: /^rljacket--/i,          src: 'Images\\Product Media\\RL Jacket\\RL Jacket-.jpg' },
  { match: /^rljacket8/i,           src: 'Images\\Product Media\\RL Jacket\\RL Jacket--2.jpg' },
  { match: /^race_line_banner/i,    src: 'Images\\Product Media\\RL Jacket\\RL Jacket-.jpg' },

  // ZOZO Jacket
  { match: /^zozo_jacket_-_back/i,  src: 'Images\\Product Media\\ZOZO Jacket\\Zozo Jacket - back.jpg' },
  { match: /^zozocearomor/i,        src: 'Images\\Product Media\\ZOZO Jacket\\Job_0051-lo res.jpg' },
  { match: /^acf77e72/i,            src: 'Images\\Product Media\\ZOZO Jacket\\Zozo Jacket - back.jpg' },

  // Ace / Triton Gloves
  { match: /^dsf8244/i,             src: 'Images\\Product Media\\Gloves\\_DSF8244-Motorosa Gloves.jpg' },
  { match: /^ace_gloves.*black/i,   src: 'Images\\Product Media\\Gloves\\Ace Gloves - Black.jpg' },
  { match: /^triton.*brown.*triumph/i, src: 'Images\\Product Media\\Gloves\\Triton Glove - Brown with Triumph.jpg' },

  // Tularosa Air Compressor
  { match: /^tularosa_air.*iphone/i,src: 'Images\\Product Media\\Air Compressor\\Tularosa_Air-Compressor-with-Iphone.jpg' },
  { match: /^tularosa_air.*tire/i,  src: 'Images\\Product Media\\Air Compressor\\Tularosa_Air-Compressor-with-Tire.jpg' },
  { match: /^tirerepairkit/i,       src: 'Images\\Product Media\\Air Compressor\\tire repair kit.jpg' },
  { match: /^freetirepatch/i,       src: 'Images\\Product Media\\Air Compressor\\Repair Kit Blister Card.jpg' },

  // T-Shirts / Merch
  { match: /^heatherbrown/i,        src: 'Images\\Product Media\\TShirts\\Tularosa_Moto-T-Shirts_2022-1040.jpg' },
  { match: /^sunsetrider/i,         src: 'Images\\Product Media\\TShirts\\Tularosa_Moto-T-Shirts_2022-1040.jpg' },
  { match: /^untitled.*design/i,    src: 'Images\\Product Media\\TShirts\\Tularosa_Moto-T-Shirts_2022-1013.jpg' },
  { match: /^untitled-10028/i,      src: 'Images\\Product Media\\Hoodie\\untitled-10047-Edit copy.jpg' },

  // Hat
  { match: /^hatondark/i,           src: 'Images\\Product Media\\Tularosa Hat\\Hat on Darkbackground -Job_0132-v2.jpg' },

  // Event / misc photos
  { match: /^photo_oct_21/i,        src: 'Social Media & Ads\\FB Ads\\Photo Oct 21, 3 04 56 PM.jpg' },
  { match: /^photo_aug_11/i,        src: 'Social Media & Ads\\FB Ads\\Photo Aug 11, 6 32 47 PM.jpg' },
  { match: /^tularosa_country/i,    src: 'Social Media & Ads\\FB Ads\\Tularosa Country 2.jpg' },
  { match: /^win_a_coyote/i,        src: 'Social Media & Ads\\Win a Coyote copy.jpg' },
  { match: /^collage_for_about/i,   src: 'Images\\Misc. Photos and Vids\\Collage for About Us.jpg' },
  { match: /^tularosamoto_cyclegear/i, src: 'Social Media & Ads\\FB Ads\\Photo Aug 11, 6 32 47 PM.jpg' },
  { match: /^screenshot_2023/i,     src: 'Social Media & Ads\\FB Ads\\Photo Aug 11, 6 32 47 PM.jpg' },
  { match: /^tularosa-moto_.*bike-night/i, src: 'Social Media & Ads\\FB Ads\\Photo Aug 11, 6 32 47 PM.jpg' },
  { match: /^i-nfn8fc9/i,           src: 'Images\\Misc. Photos and Vids\\Collage for About Us.jpg' },

  // Collections / logos
  { match: /^motorosa.*f387|^motorosa.*294c/i, src: 'FB Ads\\Point of Purchase\\Little Italy Motorosa Logo.jpg' },
  { match: /^tularosa_logo.*d55a|^tularosa_logo.*04a7/i, src: 'Images\\Logos\\tularosa logo.png' },
  { match: /^green_pants.*c1df/i,   src: 'Images\\Product Media\\Coyote Pants\\Green Pants.jpg' },
  { match: /^coyotekevlar.*back/i,  src: 'Images\\Product Media\\Coyote Pants\\Coyote Pants - Black 2.jpg' },
  { match: /^untitled_design.*c23e/i, src: 'Images\\Product Media\\TShirts\\Tularosa_Moto-T-Shirts_2022-1013.jpg' },
  { match: /^giftcard/i,            src: 'Images\\Logos\\tularosa logo no starburst.png' },

  // Blog thumbnails
  { match: /^action_camera/i,       src: 'Social Media & Ads\\Youtube Thumbs and Shorts\\countersteering  Thumbnail New2.jpg' },
  { match: /^late_apex/i,           src: 'Social Media & Ads\\Youtube Thumbs and Shorts\\Late Apex thumbnail 1 of 2.png' },
  { match: /^four_and_half/i,       src: 'Social Media & Ads\\Youtube Thumbs and Shorts\\four and half thumbnail.png' },
  { match: /^countersteering/i,     src: 'Social Media & Ads\\Youtube Thumbs and Shorts\\countersteering  Thumbnail New2.jpg' },
  { match: /^back_brake/i,          src: 'Social Media & Ads\\Youtube Thumbs and Shorts\\countersteering  Thumbnail New2.jpg' },
  { match: /^ducati_upgrade/i,      src: 'Social Media & Ads\\Youtube Thumbs and Shorts\\countersteering  Thumbnail New2.jpg' },

  // Avash suit photos (already handled but fallback)
  { match: /^avash12-24/i,          src: 'Images\\Product Media\\RL Track Suit\\Avash 12-24_Front.jpg' },

  // Oct 2022 track day photo
  { match: /^oct-09-2022/i,         src: 'Images\\Website Heroes\\Aug-27-2022-Fastrack Riders (Sat)-Level 2-Sesssion 3 Turns 12 and 13-CVR_5061_Aug2722_140PM_CaliPhoto.jpg' },
];

// ── Find all .html image src paths ────────────────────────────────────────────
function findBrokenPaths() {
  const needed = new Map();
  const srcRx  = /src="([^"]*im_[^"]*\/([^"/?]+)\.html)[^"]*"/gi;

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
        const relPath  = m[1];
        const fakeStem = m[2];
        let resolved;
        try { resolved = path.resolve(path.dirname(full), relPath.split('?')[0]); }
        catch { continue; }
        if (!resolved.startsWith(SITE_DIR) || resolved.length > 400) continue;
        if (!needed.has(resolved)) needed.set(resolved, fakeStem);
      }
    }
  }

  walk(SITE_DIR);
  return needed;
}

// ── Copy with manual mappings ─────────────────────────────────────────────────
function fixImages(needed) {
  console.log('\n📋  Applying manual mappings...\n');
  let fixed = 0, skipped = 0;
  const report = [];

  for (const [destPath, fakeStem] of needed.entries()) {
    // Find first matching rule
    const rule = MANUAL_MAP.find(r => r.match.test(fakeStem));

    if (!rule) {
      // Skip — already handled by previous fuzzy script or no mapping
      skipped++;
      continue;
    }

    const srcFile = path.join(DROPBOX_DIR, rule.src);
    if (!fs.existsSync(srcFile)) {
      console.log(`  ⚠️   Source not found: ${rule.src}`);
      report.push(`MISSING SOURCE: ${fakeStem} → ${rule.src}`);
      skipped++;
      continue;
    }

    try {
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.copyFileSync(srcFile, destPath);
      const msg = `✅  ${fakeStem}  ←  ${path.basename(rule.src)}`;
      console.log(`  ${msg}`);
      report.push(msg);
      fixed++;
    } catch (err) {
      console.log(`  ⚠️   Error: ${fakeStem}: ${err.message}`);
      skipped++;
    }
  }

  fs.writeFileSync(path.join(SITE_DIR, 'manual-fix-report.txt'), report.join('\n'), 'utf8');
  console.log(`\n  ✅  Fixed:   ${fixed}`);
  console.log(`  ⏭️   Skipped: ${skipped}`);
  console.log(`  📄  Report:  manual-fix-report.txt\n`);
}

// ── Main ──────────────────────────────────────────────────────────────────────
function main() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  Tularosa Moto — Manual Image Remapper');
  console.log('═══════════════════════════════════════════════════');

  const needed = findBrokenPaths();
  console.log(`  Found ${needed.size} .html image paths.\n`);
  fixImages(needed);

  console.log('═══════════════════════════════════════════════════');
  console.log('  Done! Refresh pages to check images.');
  console.log('═══════════════════════════════════════════════════\n');
}

main();
