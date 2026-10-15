const sharp = require('sharp');
const fs = require('fs');

async function makeAssets() {
  console.log('Generating social & search logo assets...');

  // 1. Create 1200x1200 logo-square.png with Obsidian #0B0B0E background
  // This is used for Google Knowledge Graph, AI Overviews, and Square rich cards
  const logoMain = await sharp('public/Logo Main.png')
    .resize(960, 960, { fit: 'contain', background: { r: 11, g: 11, b: 14, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: {
      width: 1200,
      height: 1200,
      channels: 4,
      background: { r: 11, g: 11, b: 14, alpha: 1 }
    }
  })
    .composite([{ input: logoMain, gravity: 'center' }])
    .png({ quality: 95 })
    .toFile('public/logo-square.png');
  console.log('✓ Created public/logo-square.png (1200x1200)');

  // 2. Create 1200x630 og-image.png for standard OpenGraph, Twitter Cards, WhatsApp & LinkedIn
  const logoH = await sharp('public/Logo horizontal.png')
    .resize(760, 190, { fit: 'contain', background: { r: 11, g: 11, b: 14, alpha: 0 } })
    .toBuffer();

  const svgSubtitle = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="glow" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stop-color="#c0392b" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#0B0B0E" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="630" fill="#0B0B0E"/>
      <circle cx="600" cy="260" r="380" fill="url(#glow)"/>
      <rect x="24" y="24" width="1152" height="582" rx="16" fill="none" stroke="#D4AF37" stroke-width="1.5" stroke-opacity="0.3"/>
      <text x="600" y="420" font-family="sans-serif" font-weight="700" font-size="22" fill="#D4AF37" text-anchor="middle" letter-spacing="3">PREMIER REGIONAL FOLK MUSIC LABEL &amp; CREATOR ACADEMY</text>
      <text x="600" y="465" font-family="sans-serif" font-size="16" fill="#A1A1AA" text-anchor="middle" letter-spacing="2">BAGHELI • BUNDELI • AWADHI • BHOJPURI • SUFI</text>
    </svg>
  `);

  await sharp(svgSubtitle)
    .composite([{ input: logoH, top: 180, left: 220 }])
    .png({ quality: 95 })
    .toFile('public/og-image.png');
  console.log('✓ Created public/og-image.png (1200x630)');

  // 3. Update public/favicon.ico
  // We create a crisp 48x48 icon for browser compatibility
  await sharp('src/app/icon.png')
    .resize(48, 48)
    .png()
    .toFile('public/favicon.png');
  console.log('✓ Created public/favicon.png (48x48)');
}

makeAssets().catch(err => {
  console.error(err);
  process.exit(1);
});
