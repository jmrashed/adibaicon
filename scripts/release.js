#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Get package version
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const version = packageJson.version;

console.log(`🚀 Creating release v${version}...`);

try {
  // Add all changes
  console.log('📦 Adding changes...');
  execSync('git add .', { stdio: 'inherit' });

  // Commit changes
  console.log('💾 Committing changes...');
  execSync(
    `git commit -m "Release v${version} - Documentation fixes and improvements"`,
    { stdio: 'inherit' }
  );

  // Create and push tag
  console.log('🏷️  Creating tag...');
  execSync(`git tag -a v${version} -m "Release v${version}"`, {
    stdio: 'inherit',
  });

  // Push changes and tags
  console.log('⬆️  Pushing to remote...');
  execSync('git push origin main', { stdio: 'inherit' });
  execSync('git push origin --tags', { stdio: 'inherit' });

  console.log(`✅ Release v${version} created successfully!`);
  console.log(`📋 Next steps:`);
  console.log(
    `   • Create GitHub release: https://github.com/jmrashed/adibaicon/releases/new?tag=v${version}`
  );
  console.log(`   • Publish to NPM: npm publish`);
} catch (error) {
  console.error('❌ Release failed:', error.message);
  process.exit(1);
}
