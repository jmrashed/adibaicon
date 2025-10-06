# adibaIcon Library

A lightweight, customizable icon font library with 78 unique letter-based icons in 3 different styles.

[![NPM Version](https://img.shields.io/npm/v/adibaicon.svg)](https://www.npmjs.com/package/adibaicon)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.txt)
[![CDN](https://img.shields.io/badge/CDN-available-green.svg)](https://adibaicon.vercel.app/css/adibaIcon.css)
[![Netlify Status](https://api.netlify.com/api/v1/badges/30307367-b567-4475-ac00-eb417ef081c0/deploy-status)](https://app.netlify.com/sites/adibaicon/deploys)



<img src="./img/v1/Screenshot from 2023-08-30 01-44-35.png">

<img src="./img/v1/Screenshot from 2023-08-30 01-44-55.png">

## Quick Start

### CDN (Recommended)
```html
<link rel="stylesheet" href="https://adibaicon.vercel.app/css/adibaIcon.css">
```

### NPM Installation
```bash
npm install adibaicon
```

### Download
Download the latest release from [GitHub](https://github.com/jmrashed/adibaicon/releases)

## Demo
- [Live Demo](https://adibaicon.vercel.app)
- [Icon Gallery](https://adibaicon.vercel.app/icons.html)
- [Documentation](https://adibaicon.vercel.app/doc.html)


## Usage

### Basic Usage
```html
<!-- New unified naming (recommended) -->
<i class="adiba-a"></i>
<i class="adiba-a adiba-lg adiba-red"></i>

<!-- Alternative styles -->
<i class="adiba-a-alt"></i>  <!-- Style 2 -->
<i class="adiba-a-bold"></i> <!-- Style 3 -->
```

### Available Icons
- **26 Standard letters**: `adiba-a` to `adiba-z`
- **26 Alternative style**: `adiba-a-alt` to `adiba-z-alt`
- **26 Bold style**: `adiba-a-bold` to `adiba-z-bold`

### Size Classes
| Class | Size | Usage |
|-------|------| ------ |
| `adiba-xs` | 12px | `<i class="adiba-a adiba-xs"></i>` |
| `adiba-sm` | 16px | `<i class="adiba-a adiba-sm"></i>` |
| `adiba-md` | 24px | `<i class="adiba-a adiba-md"></i>` |
| `adiba-lg` | 32px | `<i class="adiba-a adiba-lg"></i>` |
| `adiba-xl` | 48px | `<i class="adiba-a adiba-xl"></i>` |

### Color Classes
| Class | Color | Usage |
|-------|-------| ------ |
| `adiba-primary` | Blue | `<i class="adiba-a adiba-primary"></i>` |
| `adiba-success` | Green | `<i class="adiba-a adiba-success"></i>` |
| `adiba-danger` | Red | `<i class="adiba-a adiba-danger"></i>` |
| `adiba-red` | Pure Red | `<i class="adiba-a adiba-red"></i>` |
| `adiba-blue` | Pure Blue | `<i class="adiba-a adiba-blue"></i>` |


## Examples

### Complete Example
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://adibaicon.vercel.app/css/adibaIcon.css">
</head>
<body>
    <!-- Different styles -->
    <i class="adiba-r adiba-lg adiba-red"></i>
    <i class="adiba-a-alt adiba-lg adiba-blue"></i>
    <i class="adiba-s-bold adiba-lg adiba-green"></i>
    
    <!-- Different sizes -->
    <i class="adiba-h adiba-xs"></i>
    <i class="adiba-h adiba-sm"></i>
    <i class="adiba-h adiba-md"></i>
    <i class="adiba-h adiba-lg"></i>
    <i class="adiba-h adiba-xl"></i>
</body>
</html>
```

### Framework Integration

**React:**
```jsx
const MyComponent = () => (
  <div>
    <i className="adiba-a adiba-lg adiba-primary"></i>
  </div>
);
```

**Vue.js:**
```vue
<template>
  <i class="adiba-a adiba-lg adiba-primary"></i>
</template>
```

### Migration Guide

**Old naming (still supported):**
```html
<i class="adiba-icon icon-a icon-lg icon-red"></i>
```

**New naming (recommended):**
```html
<i class="adiba-a adiba-lg adiba-red"></i>
```

<img src="./img/demo.png">

## Browser Support
- Chrome 4+
- Firefox 3.5+
- Safari 3.1+
- Opera 10+
- IE 8+

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
MIT License - see [LICENSE.txt](LICENSE.txt)

## Author
**Md Rasheduzzaman**
- GitHub: [@jmrashed](https://github.com/jmrashed)
- Email: jmrashed@gmail.com

## Links
- [Demo](https://adibaicon.vercel.app)
- [Documentation](https://adibaicon.vercel.app/doc.html)
- [Icon Gallery](https://adibaicon.vercel.app/icons.html)
- [GitHub Repository](https://github.com/jmrashed/adibaicon)

