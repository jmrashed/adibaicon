#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🚀 Quick Deploy to Multiple Platforms...');

try {
  // Build everything
  console.log('📦 Building...');
  execSync('npm run build:all', { stdio: 'inherit' });
  
  // Commit and push
  console.log('📝 Committing...');
  execSync('git add .', { stdio: 'inherit' });
  execSync('git commit -m "Deploy: Built assets and ready for deployment" || echo "No changes to commit"', { stdio: 'inherit' });
  execSync('git push origin main', { stdio: 'inherit' });
  
  console.log('✅ Deployment triggered!');
  console.log('🌐 Platforms:');
  console.log('   - GitHub Pages: Will deploy via peaceiris/actions-gh-pages');
  console.log('   - Vercel: https://adibaicon.vercel.app');
  console.log('   - Netlify: Available for manual connection');
  
} catch (error) {
  console.error('❌ Deploy failed:', error.message);
}