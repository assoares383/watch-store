module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2018: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    requireConfigFile: false,
    sourceType: 'module',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
};
