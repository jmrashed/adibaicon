#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Simple build script for adibaIcon
console.log('🚀 Building adibaIcon...');

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, 'dist');
const distCssDir = path.join(distDir, 'css');
const distFontDir = path.join(distDir, 'font');

if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}
if (!fs.existsSync(distCssDir)) {
    fs.mkdirSync(distCssDir);
}
if (!fs.existsSync(distFontDir)) {
    fs.mkdirSync(distFontDir);
}

// Copy CSS files
const cssSource = path.join(__dirname, 'css', 'adibaIcon.css');
const cssTarget = path.join(distCssDir, 'adibaIcon.css');

if (fs.existsSync(cssSource)) {
    fs.copyFileSync(cssSource, cssTarget);
    console.log('✅ CSS file copied to dist/');
} else {
    console.error('❌ CSS source file not found');
}

// Copy font files
const fontDir = path.join(__dirname, 'font');
if (fs.existsSync(fontDir)) {
    const fontFiles = fs.readdirSync(fontDir);
    fontFiles.forEach(file => {
        const source = path.join(fontDir, file);
        const target = path.join(distFontDir, file);
        fs.copyFileSync(source, target);
    });
    console.log('✅ Font files copied to dist/');
} else {
    console.error('❌ Font directory not found');
}

// Create minified version (basic minification)
try {
    const cssContent = fs.readFileSync(cssTarget, 'utf8');
    const minified = cssContent
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
        .replace(/\s+/g, ' ') // Replace multiple spaces with single space
        .replace(/;\s*}/g, '}') // Remove semicolon before closing brace
        .replace(/\s*{\s*/g, '{') // Remove spaces around opening brace
        .replace(/;\s*/g, ';') // Remove spaces after semicolon
        .trim();
    
    const minTarget = path.join(distCssDir, 'adibaIcon.min.css');
    fs.writeFileSync(minTarget, minified);
    console.log('✅ Minified CSS created');
} catch (error) {
    console.error('❌ Error creating minified CSS:', error.message);
}

// Update font paths in dist CSS
try {
    const cssContent = fs.readFileSync(cssTarget, 'utf8');
    const updatedContent = cssContent.replace(/url\('\.\.\/font\//g, "url('../font/");
    fs.writeFileSync(cssTarget, updatedContent);
    console.log('✅ Font paths updated in dist CSS');
} catch (error) {
    console.error('❌ Error updating font paths:', error.message);
}

// Generate preload hints
const preloadHints = `
<!-- Preload adibaIcon font for better performance -->
<link rel="preload" href="./font/adibaIcon.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="./font/adibaIcon.woff" as="font" type="font/woff" crossorigin>
`;

fs.writeFileSync(path.join(distDir, 'preload-hints.html'), preloadHints);
console.log('✅ Preload hints generated');

// Create subset CSS for critical icons only
const criticalIcons = ['a', 'b', 'c', 'd', 'e', 'home', 'user', 'menu', 'close', 'search'];
const fullCss = fs.readFileSync(cssTarget, 'utf8');
let criticalCss = fullCss.split('/* New unified naming convention */')[0];

criticalIcons.forEach(icon => {
  const iconRegex = new RegExp(`\.adiba-${icon}:before[^}]+}`, 'g');
  const matches = fullCss.match(iconRegex);
  if (matches) {
    criticalCss += matches.join('\n');
  }
});

fs.writeFileSync(path.join(distCssDir, 'adibaIcon.critical.css'), criticalCss);
console.log('✅ Critical CSS subset created');

console.log('🎉 Build completed successfully!');
console.log('📁 Files created in dist/ directory');
console.log('🚀 Performance optimizations applied');