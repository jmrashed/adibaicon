import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AdibaIcon from '../integrations/vue/AdibaIcon.vue.js';

describe('AdibaIcon Vue Component', () => {
  it('renders icon with correct classes', () => {
    const wrapper = mount(AdibaIcon, {
      props: {
        icon: 'a',
        size: 'lg',
        color: 'primary',
      },
    });

    expect(wrapper.find('i').classes()).toContain('adiba-a');
    expect(wrapper.find('i').classes()).toContain('adiba-lg');
    expect(wrapper.find('i').classes()).toContain('adiba-primary');
  });

  it('applies aria-label', () => {
    const wrapper = mount(AdibaIcon, {
      props: { icon: 'home' },
    });
    expect(wrapper.find('i').attributes('aria-label')).toBe('home icon');
  });
});
