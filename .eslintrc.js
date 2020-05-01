module.exports = {
  root: true,
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  plugins: ['import', 'react-native'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    'react-native/react-native': true, // whitelist all browser-like globals
  },
  rules: {
    'global-require': 'off',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: false },
    ],
    'react-native/no-unused-styles': 2, // disallow unused styles
    'react-native/no-inline-styles': 2, // disallow styles declared within the component itself
    'react-native/no-color-literals': 2, // enforces variable names to be used for storing colors
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _assets: './src/assets',
          _components: './src/components',
          _constants: './src/constants',
          _navigations: './src/navigations',
          _screens: './src/screens',
          _services: './src/services',
          _styles: './src/styles',
          _utils: './src/utils',
          _api: './src/api',
        },
      },
    },
  },
};
