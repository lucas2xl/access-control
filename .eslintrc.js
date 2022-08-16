module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // '@typescript-eslint/no-explicit-any': 'off',
    // 'import/no-unresolved': 0,
    // 'no-use-before-define': 'off',
    // '@typescript-eslint/no-use-before-define': 'off',
    // '@typescript-eslint/unbound-method': 0,
    // 'no-shadow': 0,
    // '@typescript-eslint/no-shadow': 0,
    'no-undef': 'off',
    // '@typescript-eslint/no-unsafe-argument': 0,
    'react/display-name': 'off',
    // '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
};
