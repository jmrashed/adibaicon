#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const packageJson = require('../package.json');
const currentVersion = packageJson.version;

class DocVersionManager {
    constructor() {
        this.docsDir = path.join(__dirname, '../docs');
        this.currentVersion = currentVersion;
    }

    // Create new version documentation
    createVersionDocs() {
        const versionDir = path.join(this.docsDir, `v${this.currentVersion}`);
        
        if (!fs.existsSync(versionDir)) {
            fs.mkdirSync(versionDir, { recursive: true });
            
            // Copy current docs
            this.copyFiles(['doc.html', 'icons.html'], versionDir);
            
            // Update version references
            this.updateVersionReferences(versionDir);
            
            console.log(`✅ Created documentation for v${this.currentVersion}`);
        }
    }

    // Copy files to version directory
    copyFiles(files, targetDir) {
        files.forEach(file => {
            const source = path.join(__dirname, '..', file);
            const target = path.join(targetDir, file);
            
            if (fs.existsSync(source)) {
                fs.copyFileSync(source, target);
            }
        });
    }

    // Update version references in files
    updateVersionReferences(versionDir) {
        const files = fs.readdirSync(versionDir);
        
        files.forEach(file => {
            if (file.endsWith('.html')) {
                const filePath = path.join(versionDir, file);
                let content = fs.readFileSync(filePath, 'utf8');
                
                // Update version numbers
                content = content.replace(/v\d+\.\d+\.\d+/g, `v${this.currentVersion}`);
                
                // Update CDN links
                content = content.replace(
                    /adibaicon@latest/g, 
                    `adibaicon@${this.currentVersion}`
                );
                
                fs.writeFileSync(filePath, content);
            }
        });
    }

    // Generate version index
    generateVersionIndex() {
        const versions = this.getAvailableVersions();
        const indexContent = this.createVersionIndexHTML(versions);
        
        fs.writeFileSync(
            path.join(this.docsDir, 'index.html'), 
            indexContent
        );
    }

    // Get all available versions
    getAvailableVersions() {
        if (!fs.existsSync(this.docsDir)) return [];
        
        return fs.readdirSync(this.docsDir)
            .filter(dir => dir.startsWith('v'))
            .sort((a, b) => b.localeCompare(a)); // Latest first
    }

    // Create version index HTML
    createVersionIndexHTML(versions) {
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>adibaIcon Documentation Versions</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container py-5">
        <h1>adibaIcon Documentation</h1>
        <p class="lead">Choose a version to view its documentation:</p>
        
        <div class="list-group">
            ${versions.map(version => `
                <a href="${version}/doc.html" class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">${version}</h5>
                        ${version === `v${this.currentVersion}` ? '<span class="badge bg-primary">Latest</span>' : ''}
                    </div>
                </a>
            `).join('')}
        </div>
    </div>
</body>
</html>`;
    }

    // Run all version management tasks
    run() {
        console.log('🚀 Starting documentation versioning...');
        
        this.createVersionDocs();
        this.generateVersionIndex();
        
        console.log('✅ Documentation versioning completed!');
    }
}

// Run if called directly
if (require.main === module) {
    const manager = new DocVersionManager();
    manager.run();
}

module.exports = DocVersionManager;