# Framework Integrations

## React

```jsx
import AdibaIcon from './integrations/react/AdibaIcon';

// Basic usage
<AdibaIcon icon="a" />

// With size and color
<AdibaIcon icon="home" size="lg" color="primary" />

// With custom props
<AdibaIcon icon="user" className="custom-class" onClick={handleClick} />
```

## Vue.js

```vue
<template>
  <div>
    <!-- Basic usage -->
    <AdibaIcon icon="a" />
    
    <!-- With size and color -->
    <AdibaIcon icon="home" size="lg" color="primary" />
  </div>
</template>

<script>
import AdibaIcon from './integrations/vue/AdibaIcon.vue';

export default {
  components: {
    AdibaIcon
  }
};
</script>
```

## Angular

```html
<!-- Basic usage -->
<i class="adiba-a" aria-label="A icon"></i>

<!-- With size and color -->
<i class="adiba-home adiba-lg adiba-primary" aria-label="Home icon"></i>
```

## Performance Tips

1. **Preload fonts**: Add preload hints from `dist/preload-hints.html`
2. **Use critical CSS**: Load `adibaIcon.critical.css` for above-the-fold icons
3. **Subset fonts**: Only include icons you actually use

## Accessibility

- All components include proper ARIA labels
- Supports high contrast mode
- Respects reduced motion preferences
- Includes focus indicators