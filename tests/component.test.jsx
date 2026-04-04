import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AdibaIcon from '../integrations/react/AdibaIcon.jsx';

// Mock CSS classes for testing
const mockCSS = `
  .adiba-a { display: inline-block; font-family: 'adibaIcon'; }
  .adiba-lg { font-size: 32px; }
  .adiba-primary { color: blue; }
`;

describe('AdibaIcon React Component', () => {
  beforeAll(() => {
    document.head.insertAdjacentHTML('beforeend', `<style>${mockCSS}</style>`);
  });

  it('renders icon with correct class names', () => {
    render(<AdibaIcon icon="a" size="lg" color="primary" />);
    const icon = screen.getByRole('img');
    expect(icon).toHaveClass('adiba-a', 'adiba-lg', 'adiba-primary');
  });

  it('applies aria-label correctly', () => {
    render(<AdibaIcon icon="home" />);
    const icon = screen.getByRole('img');
    expect(icon).toHaveAttribute('aria-label', 'home icon');
  });

  it('forwards additional props', () => {
    const { container } = render(<AdibaIcon icon="a" title="Test" />);
    expect(container.firstChild).toHaveAttribute('title', 'Test');
  });

  it('handles default props', () => {
    render(<AdibaIcon icon="a" />);
    const icon = screen.getByRole('img');
    expect(icon).toHaveClass('adiba-a');
    expect(icon).not.toHaveClass('adiba-lg');
  });
});
