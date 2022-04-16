module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    'airbnb-base',
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
  ],
  // add your custom rules here
  rules: {
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-tabs': 0,
    'max-len': 'off',
    'linebreak-style': 0,
    eqeqeq: 'off',
    'no-unused-expressions': 'off',
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-mixed-operators': 'off',
    'prefer-destructuring': 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'vue/no-unused-components': 'off',
    'vue/no-unused-vars': 'off',
    'vue/require-prop-type-constructor': 'off',
    'global-require': 'off',
    'consistent-return': 'off',
    'no-unused-vars': 'off',
    'no-plusplus': 'off',
    'no-undef': 'off',
    'no-use-before-define': 'off',
    'no-restricted-syntax': 'off',
    'no-restricted-globals': 'off',
    'no-prototype-builtins': 'off',
    'no-empty-pattern': 'off',
    'no-return-await': 'off',
    'no-return-assign': 'off',
    'no-await-in-loop': 'off',
    camelcase: 'off',
    radix: 'off',
    'prefer-rest-params': 'off',
    'func-names': 'off',
    'no-sequences': 'off',
    'no-bitwise': 'off',

  },

};
