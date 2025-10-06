#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🎨 Generating SVG icons...');

// Create SVG directory
const svgDir = 'src/svg';
if (!fs.existsSync(svgDir)) {
  fs.mkdirSync(svgDir, { recursive: true });
}

// Basic SVG templates for semantic icons
const svgTemplates = {
  home: '<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>',
  user: '<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>',
  menu: '<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>',
  close: '<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>',
  search: '<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>',
  heart: '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>',
  star: '<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>',
  arrow: '<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>'
};

// Generate SVG files
Object.entries(svgTemplates).forEach(([name, path]) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  ${path}
</svg>`;
  
  fs.writeFileSync(`${svgDir}/${name}.svg`, svg);
});

// Create SVG sprite
const sprite = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
${Object.entries(svgTemplates).map(([name, path]) => 
  `  <symbol id="adiba-${name}" viewBox="0 0 24 24">
    ${path}
  </symbol>`
).join('\n')}
</svg>`;

fs.writeFileSync(`${svgDir}/sprite.svg`, sprite);

// Create SVG CSS
const svgCss = `/* SVG Icons */
.adiba-svg {
  display: inline-block;
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: middle;
}

${Object.keys(svgTemplates).map(name => 
  `.adiba-svg-${name} {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">${svgTemplates[name].replace(/"/g, "'")}</svg>');
  }`
).join('\n\n')}`;

fs.writeFileSync('dist/css/adibaIcon-svg.css', svgCss);

console.log(`✅ Generated ${Object.keys(svgTemplates).length} SVG icons`);
console.log('📁 SVG files: src/svg/');
console.log('🎨 SVG sprite: src/svg/sprite.svg');
console.log('📄 SVG CSS: dist/css/adibaIcon-svg.css');