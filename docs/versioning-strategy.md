# Documentation Versioning Strategy

## Directory Structure
```
docs/
├── v2.2.1/           # Current version
│   ├── index.html
│   ├── api.html
│   └── changelog.html
├── v2.1.0/           # Previous version
├── latest/           # Symlink to current
└── archive/          # Old versions
```

## Version Management

### 1. Semantic Versioning
- **Major (3.0.0)**: Breaking changes, new doc structure
- **Minor (2.3.0)**: New features, additional sections
- **Patch (2.2.2)**: Bug fixes, content updates

### 2. Documentation Updates
```bash
# Create new version docs
cp -r docs/v2.2.1 docs/v2.3.0
# Update version references
sed -i 's/v2.2.1/v2.3.0/g' docs/v2.3.0/*.html
```

### 3. Automated Versioning
```json
{
  "scripts": {
    "docs:version": "node scripts/version-docs.js",
    "docs:deploy": "node scripts/deploy-docs.js"
  }
}
```