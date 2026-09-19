import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = join(__dirname, '../public/icon.png');

async function removeCheckerBackground(file) {
  const { data, info } = await sharp(file)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    if (r > 190 && g > 190 && b > 190 && max - min < 18) {
      data[i + 3] = 0;
    }
  }

  return sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  }).png().toBuffer();
}

const cleanSource = await removeCheckerBackground(src);
const icon = await sharp(cleanSource)
  .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 8 })
  .resize(220, 220, { fit: 'inside', kernel: 'lanczos3' })
  .sharpen({ sigma: 0.7, m1: 0.8, m2: 1.8 })
  .png()
  .toBuffer();

async function makeIcon(size) {
  const radius = Math.round(size * 0.2);
  const inset = Math.round(size * 0.08);
  const markSize = size - inset * 2;
  const background = Buffer.from(`
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#07140f"/>
          <stop offset="0.55" stop-color="#123323"/>
          <stop offset="1" stop-color="#0b1118"/>
        </linearGradient>
      </defs>
      <rect width="${size}" height="${size}" rx="${radius}" fill="url(#bg)"/>
      <circle cx="${size * 0.72}" cy="${size * 0.25}" r="${size * 0.22}" fill="#20d56f" opacity="0.18"/>
    </svg>
  `);

  return sharp(background)
    .composite([
      {
        input: await sharp(icon).resize(markSize, markSize, { fit: 'inside', kernel: 'lanczos3' }).toBuffer(),
        gravity: 'center',
      },
    ])
    .sharpen({ sigma: 0.5, m1: 0.6, m2: 1.5 })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

// PNG sizes for browser/iOS
const sizes = [
  { size: 32,  name: 'favicon-32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
];

for (const { size, name } of sizes) {
  await sharp(await makeIcon(size)).toFile(join(__dirname, '../public', name));
  console.log(`✓ ${name} (${size}×${size})`);
}

// SVG wrapper that embeds a 512×512 resized copy as base64 (HiDPI favicons)
const pngBuf = await makeIcon(256);
const b64 = pngBuf.toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256">
  <image href="data:image/png;base64,${b64}" width="256" height="256"/>
</svg>`;
writeFileSync(join(__dirname, '../public/favicon.svg'), svg);
console.log('✓ favicon.svg (SVG wrapper with embedded PNG)');
