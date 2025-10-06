# adibaIcon Distribution Guide

## Installation Methods

### NPM
```bash
npm install adibaicon
```

### CDN (jsDelivr)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/adibaicon@latest/dist/css/adibaIcon.min.css">
```

### CDN (unpkg)
```html
<link rel="stylesheet" href="https://unpkg.com/adibaicon@latest/dist/css/adibaIcon.min.css">
```

## Available Formats

### CSS
- `dist/css/adibaIcon.css` - Full CSS
- `dist/css/adibaIcon.min.css` - Minified CSS
- `dist/css/adibaIcon.basic.css` - Basic subset (a-m)
- `dist/css/adibaIcon.extended.css` - Extended subset (n-z)
- `dist/css/adibaIcon.ui.css` - UI icons subset

### SCSS
- `src/scss/adibaIcon.scss` - Main SCSS file
- `src/scss/_variables.scss` - SCSS variables

### LESS
- `src/less/adibaIcon.less` - LESS source

### JavaScript
- `integrations/react/AdibaIcon.jsx` - React component
- `integrations/vue/AdibaIcon.vue` - Vue component

## Entry Points

- **Main**: `dist/css/adibaIcon.css`
- **Module**: `dist/js/adibaIcon.esm.js`
- **Browser**: `dist/css/adibaIcon.min.css`
- **Style**: `dist/css/adibaIcon.css`
- **SASS**: `src/scss/adibaIcon.scss`

## Versioning

adibaIcon follows semantic versioning:
- **Major**: Breaking changes
- **Minor**: New features, backward compatible
- **Patch**: Bug fixes, backward compatible