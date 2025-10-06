#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Optimizing fonts...');

// Font optimization configuration
const fontConfig = {
  formats: ['woff2', 'woff', 'ttf'],
  subsets: {
    basic: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'],
    extended: ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    ui: ['home', 'user', 'menu', 'close', 'search', 'settings']
  }
};

// Generate subset CSS
function generateSubsetCSS(subset, icons) {
  const baseCss = fs.readFileSync('src/css/adibaIcon.css', 'utf8');
  const fontFace = baseCss.split('/* New unified naming convention */')[0];
  
  let subsetCss = fontFace;
  icons.forEach(icon => {
    const regex = new RegExp(`\\.adiba-${icon}:before[^}]+}`, 'g');
    const matches = baseCss.match(regex);
    if (matches) {
      subsetCss += '\n' + matches.join('\n');
    }
  });
  
  const outputPath = `dist/css/adibaIcon.${subset}.css`;
  fs.writeFileSync(outputPath, subsetCss);
  console.log(`✅ Created ${subset} subset: ${icons.length} icons`);
}

// Create subsets
Object.entries(fontConfig.subsets).forEach(([name, icons]) => {
  generateSubsetCSS(name, icons);
});

// Create combined subset
const allIcons = Object.values(fontConfig.subsets).flat();
generateSubsetCSS('complete', allIcons);

console.log('✅ Font optimization completed!');