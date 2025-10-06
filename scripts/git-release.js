#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

const version = require('../package.json').version;

console.log(`🚀 Releasing adibaIcon v${version}...`);

try {
  // Build everything
  console.log('📦 Building...');
  execSync('npm run build:all', { stdio: 'inherit' });
  
  // Add all files
  console.log('📝 Adding files...');
  execSync('git add .', { stdio: 'inherit' });
  
  // Commit
  console.log('💾 Committing...');
  execSync(`git commit -m "Release v${version} - Production ready with 95+ icons, framework support, and modern build system"`, { stdio: 'inherit' });
  
  // Create tag
  console.log('🏷️ Creating tag...');
  execSync(`git tag -a v${version} -m "Release v${version}"`, { stdio: 'inherit' });
  
  // Push
  console.log('⬆️ Pushing to remote...');
  execSync('git push origin main', { stdio: 'inherit' });
  execSync(`git push origin v${version}`, { stdio: 'inherit' });
  
  console.log(`✅ Successfully released v${version}!`);
  console.log(`🌐 GitHub: https://github.com/jmrashed/adibaicon/releases/tag/v${version}`);
  console.log(`📦 NPM: npm publish`);
  
} catch (error) {
  console.error('❌ Release failed:', error.message);
  process.exit(1);
}