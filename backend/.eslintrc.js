module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'linebreak-style': 0,
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-prototype-builtins': 'off',
    'prefer-destructuring': 'off',
    'object-shorthand': 'off',
    'no-else-return': 'off',
    'no-useless-return': 'off',
    'consistent-return': 'off',
    'no-lonely-if': 'off',
    'no-undef': 'off',
    'max-len': 'off',
    eqeqeq: 'off',
    radix: 'off',
    indent: 'off',
  },
};
