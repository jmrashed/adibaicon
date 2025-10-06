#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Building adibaIcon...');

// Create dist structure
const dirs = ['dist', 'dist/css', 'dist/fonts', 'dist/js'];
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Copy and process CSS
const cssSource = fs.readFileSync('src/css/adibaIcon.css', 'utf8');
const cssMinified = cssSource
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\s+/g, ' ')
  .replace(/;\s*}/g, '}')
  .trim();

fs.writeFileSync('dist/css/adibaIcon.css', cssSource);
fs.writeFileSync('dist/css/adibaIcon.min.css', cssMinified);

// Copy fonts
const fontFiles = fs.readdirSync('src/fonts');
fontFiles.forEach(file => {
  fs.copyFileSync(`src/fonts/${file}`, `dist/fonts/${file}`);
});

// Process JS
const jsSource = fs.readFileSync('src/js/main.js', 'utf8');
const jsMinified = jsSource
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\/\/.*$/gm, '')
  .replace(/\s+/g, ' ')
  .trim();

fs.writeFileSync('dist/js/main.js', jsSource);
fs.writeFileSync('dist/js/main.min.js', jsMinified);

// Update font paths in CSS
const distCss = fs.readFileSync('dist/css/adibaIcon.css', 'utf8');
const updatedCss = distCss.replace(/url\('\.\.\/font\//g, "url('../fonts/");
fs.writeFileSync('dist/css/adibaIcon.css', updatedCss);

const distCssMin = fs.readFileSync('dist/css/adibaIcon.min.css', 'utf8');
const updatedCssMin = distCssMin.replace(/url\('\.\.\/font\//g, "url('../fonts/");
fs.writeFileSync('dist/css/adibaIcon.min.css', updatedCssMin);

// Generate SVG icons
try {
  require('./generate-svg.js');
} catch (error) {
  console.log('⚠️ SVG generation skipped');
}

console.log('✅ Build completed successfully!');
console.log('📁 Files created in dist/ directory');