<template>
  <i 
    :class="iconClasses"
    role="img"
    :aria-label="`${icon} icon`"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  name: 'AdibaIcon',
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'md',
      validator: value => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
    },
    color: {
      type: String,
      validator: value => ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'red', 'blue', 'green', 'purple', 'orange', 'yellow'].includes(value)
    }
  },
  computed: {
    iconClasses() {
      const classes = [`adiba-${this.icon}`];
      if (this.size) classes.push(`adiba-${this.size}`);
      if (this.color) classes.push(`adiba-${this.color}`);
      return classes.join(' ');
    }
  }
};
</script>