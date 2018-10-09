/* eslint-env node */

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: false,
    "jsx-control-statements/jsx-control-statements": true,
  },

  extends: [
    ...[
      "../rules/best.practices",
      "../rules/comments",
      "../rules/compat",
      "../rules/errors",
      "../rules/es6",
      "../rules/html",
      "../rules/import",
      "../rules/jsdoc",
      "../rules/promise",
      "../rules/react",
      "../rules/style",
      "../rules/unicorn",
      "../rules/variables",
    ].map(require.resolve),

    "plugin:prettier/recommended",
    "prettier/react",
    "prettier/unicorn",
  ],

  parserOptions: {
    ecmaFeatures: {
      classes: true,
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: 7,
    sourceType: "module",
  },

  plugins: [
    "import",
    "unicorn",
    "react",
    "jsx-control-statements",
    "json",
    "no-inferred-method-name",
  ],

  rules: {
    "prettier/prettier": "error",

    /*
     * A list of regex strings that, if matched by a path, will not report
     * the matching module if no exports are found.
     */
    "import/ignore": [".(sass|scss|less|css)$"],
  },
}
