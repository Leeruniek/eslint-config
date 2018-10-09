/* eslint-env node */

module.exports = {
  env: {
    browser: false,
    es6: true,
    node: true,
  },

  extends: [
    ...[
      "../rules/best.practices",
      "../rules/comments",
      "../rules/errors",
      "../rules/es6",
      "../rules/import",
      "../rules/jsdoc",
      "../rules/node",
      "../rules/promise",
      "../rules/style",
      "../rules/unicorn",
      "../rules/variables",
    ].map(require.resolve),

    "plugin:prettier/recommended",
    "prettier/unicorn",
  ],

  parserOptions: {
    ecmaFeatures: {
      classes: true,
      impliedStrict: true,
    },
    ecmaVersion: 7,
    sourceType: "module",
  },

  plugins: ["import", "unicorn", "json", "no-inferred-method-name"],
}
