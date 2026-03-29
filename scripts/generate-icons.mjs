import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const brandDir = join(root, 'brand');

mkdirSync(brandDir, { recursive: true });

/**
 * Generate an SVG icon showing a card with a vertical slider.
 * - Rounded card shape
 * - Vertical slider track with fill from top (representing cover/blind)
 * - Small handle bar
 * - Clean, minimal design matching HA aesthetic
 */
function generateIconSvg(size, isDark = false) {
  const s = size;
  const pad = s * 0.08;

  // Card dimensions
  const cardX = pad;
  const cardY = pad;
  const cardW = s - 2 * pad;
  const cardH = s - 2 * pad;
  const cardR = s * 0.12; // border-radius

  // Colors
  const cardBg = isDark ? '#1c1c1c' : '#ffffff';
  const cardStroke = isDark ? '#333333' : '#e0e0e0';
  const sliderBg = isDark ? '#2a2a2a' : '#f0f0f0';
  const sliderFill = '#7c4dff'; // HA purple accent
  const handleColor = isDark ? '#1c1c1c' : '#ffffff';
  const textBarColor = isDark ? '#444444' : '#d0d0d0';

  // Slider track
  const sliderW = s * 0.32;
  const sliderH = s * 0.55;
  const sliderX = (s - sliderW) / 2;
  const sliderY = s * 0.28;
  const sliderR = sliderW * 0.38;

  // Fill from top: ~65% filled (cover partially closed)
  const fillRatio = 0.65;
  const fillH = sliderH * fillRatio;

  // Handle position
  const handleY = sliderY + fillH;
  const handleW = sliderW * 0.45;
  const handleH = s * 0.018;
  const handleX = sliderX + (sliderW - handleW) / 2;

  // State text bar (thin line representing text)
  const textBarW = s * 0.4;
  const textBarH = s * 0.025;
  const textBarX = (s - textBarW) / 2;
  const textBarY = s * 0.16;

  // Sub-text bar
  const subBarW = s * 0.22;
  const subBarH = s * 0.018;
  const subBarX = (s - subBarW) / 2;
  const subBarY = textBarY + textBarH + s * 0.025;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}">
  <!-- Card background -->
  <rect x="${cardX}" y="${cardY}" width="${cardW}" height="${cardH}" rx="${cardR}" ry="${cardR}"
        fill="${cardBg}" stroke="${cardStroke}" stroke-width="${s * 0.008}"/>

  <!-- State text placeholder bars -->
  <rect x="${textBarX}" y="${textBarY}" width="${textBarW}" height="${textBarH}" rx="${textBarH / 2}"
        fill="${textBarColor}"/>
  <rect x="${subBarX}" y="${subBarY}" width="${subBarW}" height="${subBarH}" rx="${subBarH / 2}"
        fill="${textBarColor}" opacity="0.6"/>

  <!-- Slider track background -->
  <rect x="${sliderX}" y="${sliderY}" width="${sliderW}" height="${sliderH}" rx="${sliderR}" ry="${sliderR}"
        fill="${sliderBg}"/>

  <!-- Slider fill (from top, representing the cover) -->
  <clipPath id="sliderClip">
    <rect x="${sliderX}" y="${sliderY}" width="${sliderW}" height="${sliderH}" rx="${sliderR}" ry="${sliderR}"/>
  </clipPath>
  <rect x="${sliderX}" y="${sliderY}" width="${sliderW}" height="${fillH}" clip-path="url(#sliderClip)"
        fill="${sliderFill}"/>

  <!-- Handle bar -->
  <rect x="${handleX}" y="${handleY - handleH / 2}" width="${handleW}" height="${handleH}" rx="${handleH / 2}"
        fill="${handleColor}" opacity="0.9"/>
</svg>`;
}

/**
 * Generate a landscape logo SVG.
 * Shows the card icon + "Vertical Slider Card" text area.
 */
function generateLogoSvg(width, height, isDark = false) {
  const iconSize = height * 0.8;
  const iconY = (height - iconSize) / 2;
  const iconX = height * 0.1;

  const textBarColor = isDark ? '#cccccc' : '#444444';
  const bg = isDark ? '#1c1c1c' : '#ffffff';

  // Text placeholders (cleaner than actual text for brand images)
  const tX = iconX + iconSize + height * 0.15;
  const tW1 = width * 0.45;
  const tH1 = height * 0.08;
  const tY1 = height * 0.35;

  const tW2 = width * 0.35;
  const tH2 = height * 0.05;
  const tY2 = tY1 + tH1 + height * 0.08;

  // We embed the icon inline rather than referencing it
  const cardR = iconSize * 0.12;
  const cardBg = isDark ? '#2a2a2a' : '#f5f5f5';
  const cardStroke = isDark ? '#333333' : '#e0e0e0';
  const sliderBg = isDark ? '#333333' : '#ebebeb';
  const sliderFill = '#7c4dff';
  const handleColor = isDark ? '#2a2a2a' : '#ffffff';

  const slW = iconSize * 0.32;
  const slH = iconSize * 0.55;
  const slX = iconX + (iconSize - slW) / 2;
  const slY = iconY + iconSize * 0.28;
  const slR = slW * 0.38;
  const fillH = slH * 0.65;
  const hW = slW * 0.45;
  const hH = iconSize * 0.018;
  const hX = slX + (slW - hW) / 2;
  const hY = slY + fillH - hH / 2;

  const stY = iconY + iconSize * 0.16;
  const stW = iconSize * 0.4;
  const stH = iconSize * 0.025;
  const stX = iconX + (iconSize - stW) / 2;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="${bg}" rx="${height * 0.08}"/>

  <!-- Embedded card icon -->
  <g>
    <rect x="${iconX}" y="${iconY}" width="${iconSize}" height="${iconSize}" rx="${cardR}" ry="${cardR}"
          fill="${cardBg}" stroke="${cardStroke}" stroke-width="${iconSize * 0.008}"/>
    <rect x="${stX}" y="${stY}" width="${stW}" height="${stH}" rx="${stH / 2}" fill="${cardStroke}"/>
    <rect x="${slX}" y="${slY}" width="${slW}" height="${slH}" rx="${slR}" ry="${slR}" fill="${sliderBg}"/>
    <clipPath id="lClip">
      <rect x="${slX}" y="${slY}" width="${slW}" height="${slH}" rx="${slR}" ry="${slR}"/>
    </clipPath>
    <rect x="${slX}" y="${slY}" width="${slW}" height="${fillH}" clip-path="url(#lClip)" fill="${sliderFill}"/>
    <rect x="${hX}" y="${hY}" width="${hW}" height="${hH}" rx="${hH / 2}" fill="${handleColor}" opacity="0.9"/>
  </g>

  <!-- Title text placeholder -->
  <rect x="${tX}" y="${tY1}" width="${tW1}" height="${tH1}" rx="${tH1 / 2}" fill="${textBarColor}" opacity="0.7"/>
  <rect x="${tX}" y="${tY2}" width="${tW2}" height="${tH2}" rx="${tH2 / 2}" fill="${textBarColor}" opacity="0.35"/>
</svg>`;
}

async function generate() {
  const configs = [
    // Icons (square)
    { name: 'icon.png', size: 256, type: 'icon', dark: false },
    { name: 'icon@2x.png', size: 512, type: 'icon', dark: false },
    { name: 'dark_icon.png', size: 256, type: 'icon', dark: true },
    { name: 'dark_icon@2x.png', size: 512, type: 'icon', dark: true },
    // Logos (landscape)
    { name: 'logo.png', w: 512, h: 256, type: 'logo', dark: false },
    { name: 'logo@2x.png', w: 1024, h: 512, type: 'logo', dark: false },
    { name: 'dark_logo.png', w: 512, h: 256, type: 'logo', dark: true },
    { name: 'dark_logo@2x.png', w: 1024, h: 512, type: 'logo', dark: true },
  ];

  for (const cfg of configs) {
    let svg;
    if (cfg.type === 'icon') {
      svg = generateIconSvg(cfg.size, cfg.dark);
    } else {
      svg = generateLogoSvg(cfg.w, cfg.h, cfg.dark);
    }

    const outPath = join(brandDir, cfg.name);
    const width = cfg.size || cfg.w;
    const height = cfg.size || cfg.h;

    await sharp(Buffer.from(svg))
      .resize(width, height)
      .png({ compressionLevel: 9 })
      .toFile(outPath);

    console.log(`Generated: brand/${cfg.name} (${width}x${height})`);
  }

  console.log('\nAll brand images generated successfully.');
}

generate().catch(console.error);
