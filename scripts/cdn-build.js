#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🌐 Building CDN distribution...');

// Create CDN directory
const cdnDir = 'cdn';
if (!fs.existsSync(cdnDir)) {
  fs.mkdirSync(cdnDir, { recursive: true });
}

// Copy dist files to CDN with version
const version = require('../package.json').version;
const versionDir = `${cdnDir}/${version}`;

if (!fs.existsSync(versionDir)) {
  fs.mkdirSync(versionDir, { recursive: true });
}

// Copy files
const filesToCopy = [
  { src: 'dist/css/adibaIcon.css', dest: `${versionDir}/adibaIcon.css` },
  { src: 'dist/css/adibaIcon.min.css', dest: `${versionDir}/adibaIcon.min.css` },
  { src: 'dist/fonts', dest: `${versionDir}/fonts` }
];

filesToCopy.forEach(({ src, dest }) => {
  if (fs.existsSync(src)) {
    if (fs.statSync(src).isDirectory()) {
      if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
      const files = fs.readdirSync(src);
      files.forEach(file => {
        fs.copyFileSync(`${src}/${file}`, `${dest}/${file}`);
      });
    } else {
      fs.copyFileSync(src, dest);
    }
  }
});

// Create latest symlink
const latestDir = `${cdnDir}/latest`;
if (fs.existsSync(latestDir)) {
  fs.rmSync(latestDir, { recursive: true });
}
fs.cpSync(versionDir, latestDir, { recursive: true });

console.log(`✅ CDN build completed for version ${version}`);
console.log(`📁 Files available at: cdn/${version}/`);