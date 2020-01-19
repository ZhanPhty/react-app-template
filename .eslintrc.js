module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    'jsx-control-statements/jsx-control-statements': true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-control-statements/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'jsx-control-statements', 'prettier'],
  globals: {
    $: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'prettier/prettier': 1,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'eqeqeq': ['warn', 'always'],
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      }
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'jsx-control-statements/jsx-use-if-tag': 0
  }
}
