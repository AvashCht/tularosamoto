const fs = require('fs');
const path = require('path');

const SITE = path.resolve('.');
let updated = 0;

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) { walk(full); continue; }
    if (!/\.html?$/i.test(e.name)) continue;

    let html = fs.readFileSync(full, 'utf8');
    const orig = html;

    // Fix social links
    html = html.replace(/href="[^"]*facebook[^"]*tularosamoto[^"]*"/gi, 'href="https://www.facebook.com/tularosamoto"');
    html = html.replace(/href="[^"]*instagram[^"]*tularosa\.moto[^"]*"/gi, 'href="https://www.instagram.com/tularosa.moto/"');
    html = html.replace(/href="[^"]*youtube[^"]*UCYKnkDtVOrN845CpEAOZzLQ[^"]*"/gi, 'href="https://www.youtube.com/@tularosamoto"');
    html = html.replace(/href="[^"]*youtube\.com\/channel\/UCYKnkDtVOrN845CpEAOZzLQ[^"]*"/gi, 'href="https://www.youtube.com/@tularosamoto"');

    // Remove Log in link
    html = html.replace(/<a[^>]+href="[^"]*account\/login[^"]*"[^>]*>[\s\S]*?<\/a>/gi, '');

    // Remove Cart link from nav
    html = html.replace(/<a[^>]+href="[^"]*\/cart[^"]*"[^>]*>Cart<\/a>/gi, '');

    if (html !== orig) {
      fs.writeFileSync(full, html, 'utf8');
      updated++;
    }
  }
}

walk(SITE);
console.log(`Updated ${updated} files.`);
