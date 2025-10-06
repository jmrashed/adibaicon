# adibaIcon Documentation

## Quick Links

- [Getting Started](README.md)
- [Framework Integrations](integrations.md)
- [Contributing Guide](CONTRIBUTING.md)

## Project Structure

```
adibaicon/
├── src/                 # Source files
│   ├── css/            # Source CSS
│   ├── js/             # Source JavaScript
│   └── fonts/          # Source fonts
├── dist/               # Built files (generated)
│   ├── css/            # Minified CSS
│   ├── js/             # Minified JS
│   └── fonts/          # Optimized fonts
├── docs/               # Documentation
├── integrations/       # Framework components
├── tools/              # Developer tools
└── scripts/            # Build scripts
```

## Build System

### Development
```bash
npm run dev          # Watch mode
npm run build        # Production build
npm run build:all    # Full build with optimizations
```

### Font Optimization
```bash
npm run optimize:fonts  # Create font subsets
```

### Available Builds
- `adibaIcon.css` - Full CSS
- `adibaIcon.min.css` - Minified CSS
- `adibaIcon.basic.css` - Basic subset (a-m)
- `adibaIcon.extended.css` - Extended subset (n-z)
- `adibaIcon.ui.css` - UI icons subset