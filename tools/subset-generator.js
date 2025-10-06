#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Generate custom CSS subset based on used icons
function generateSubset(usedIcons) {
    const fullCss = fs.readFileSync(path.join(__dirname, '../css/adibaIcon.css'), 'utf8');
    
    // Base styles
    let subset = fullCss.split('/* New unified naming convention */')[0];
    
    // Add only used icons
    usedIcons.forEach(icon => {
        const regex = new RegExp(`\\.adiba-${icon}:before[^}]+}`, 'g');
        const matches = fullCss.match(regex);
        if (matches) {
            subset += '\n' + matches.join('\n');
        }
    });
    
    return subset;
}

// CLI usage
if (require.main === module) {
    const icons = process.argv.slice(2);
    if (icons.length === 0) {
        console.log('Usage: node subset-generator.js icon1 icon2 icon3');
        process.exit(1);
    }
    
    const subset = generateSubset(icons);
    const outputPath = path.join(__dirname, '../dist/adibaIcon.subset.css');
    fs.writeFileSync(outputPath, subset);
    console.log(`✅ Subset CSS generated with ${icons.length} icons`);
    console.log(`📁 Saved to: ${outputPath}`);
}

module.exports = { generateSubset };