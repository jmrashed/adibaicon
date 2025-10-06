#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

const version = process.argv[2];
if (!version) {
  console.error('Usage: node scripts/release.js <version>');
  process.exit(1);
}

console.log(`🚀 Creating release ${version}...`);

// Update package.json version
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.version = version;
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));

// Build all formats
execSync('npm run build:all', { stdio: 'inherit' });

// Build CDN
execSync('node scripts/cdn-build.js', { stdio: 'inherit' });

// Create release notes
const releaseNotes = `# Release ${version}

## Changes
- Updated to version ${version}
- Built with latest optimizations
- CDN files updated

## Installation
\`\`\`bash
npm install adibaicon@${version}
\`\`\`

## CDN
\`\`\`html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/adibaicon@${version}/dist/css/adibaIcon.min.css">
\`\`\`
`;

fs.writeFileSync(`RELEASE-${version}.md`, releaseNotes);

console.log(`✅ Release ${version} prepared`);
console.log('📝 Release notes created');
console.log('🌐 CDN files ready');