module.exports = {
  root: true,
  extends: 'airbnb',
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'arrow-body-style': 'off',
    'semi': 'off',
    'react/jsx-tag-spacing': ['error', {
      'closingSlash': 'never',
      'beforeSelfClosing': 'never',
      'afterOpening': 'never',
      'beforeClosing': 'allow',
    }],
    'react/jsx-filename-extension': ['error', {
      'extensions': [
        '.jsx',
        '.tsx',
      ],
    }],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
  },
};
