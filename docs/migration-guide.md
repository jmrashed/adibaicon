# Icon Naming Migration Guide

## Naming Convention Changes

### Old vs New Naming

| Old (Deprecated) | New (Recommended) | Status |
|------------------|-------------------|---------|
| `icon-style1-a` | `adiba-a` | ✅ Supported |
| `icon-style2-a` | `adiba-a-alt` | ✅ Supported |
| `icon-style3-a` | `adiba-a-bold` | ✅ Supported |
| `icon-a` | `adiba-a` | ✅ Supported |
| `adiba-icon icon-a` | `adiba-a` | ✅ Supported |

### Migration Steps

1. **Replace old class names** with new unified naming:
```html
<!-- Before -->
<i class="adiba-icon icon-a icon-lg icon-red"></i>

<!-- After -->
<i class="adiba-a adiba-lg adiba-red"></i>
```

2. **Update size classes**:
```html
<!-- Before -->
<i class="icon-lg"></i>

<!-- After -->
<i class="adiba-lg"></i>
```

3. **Update color classes**:
```html
<!-- Before -->
<i class="icon-red"></i>

<!-- After -->
<i class="adiba-red"></i>
```

## Semantic Icon Names

New semantic names for better readability:

```html
<!-- Navigation -->
<i class="adiba-home"></i>     <!-- Instead of adiba-h -->
<i class="adiba-user"></i>     <!-- Instead of adiba-u -->
<i class="adiba-menu"></i>     <!-- Instead of adiba-m -->

<!-- Actions -->
<i class="adiba-search"></i>   <!-- Instead of adiba-s -->
<i class="adiba-close"></i>    <!-- Instead of adiba-x -->
<i class="adiba-settings"></i> <!-- Instead of adiba-s -->
```

## Backward Compatibility

All old naming conventions are still supported:

```html
<!-- These still work -->
<i class="icon-style1-a"></i>
<i class="adiba-icon icon-a"></i>
<i class="icon-lg icon-red"></i>

<!-- But these are preferred -->
<i class="adiba-a"></i>
<i class="adiba-a adiba-lg adiba-red"></i>
```

## Framework Updates

### React Component
```jsx
// Before
<AdibaIcon icon="style1-a" size="lg" color="red" />

// After
<AdibaIcon icon="a" size="lg" color="red" />
<AdibaIcon icon="home" size="lg" color="primary" />
```

### Vue Component
```vue
<!-- Before -->
<AdibaIcon icon="style1-a" size="lg" color="red" />

<!-- After -->
<AdibaIcon icon="a" size="lg" color="red" />
<AdibaIcon icon="home" size="lg" color="primary" />
```