import js from '@eslint/js';
import react from 'eslint-plugin-react';

export default [
  js.configs.recommended,
  {
    plugins: {
      react,
    },
    rules: {
      ...react.configs.recommended.rules,
      'react/prop-types': 'off',
    },
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        browser: true,
        node: true,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**', '*.min.*'],
  },
];
