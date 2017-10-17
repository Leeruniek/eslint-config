/* eslint-env node */

module.exports = {
  env: {
    browser: false,
    es6    : true,
    node   : true,
  },
  extends: [
    "./import",
    "./unicorn",
    "./es6",
    "./errors",
    "./variables",
    "./best.practices",
    "./style",
    "./jsdoc",
    "./comments",
    "./promise",
    "./node",
  ].map( require.resolve ),
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict               : true,
    },
    ecmaVersion: 2017,
    sourceType : "module",
  },
  plugins: [
    "json",
    "no-inferred-method-name",
  ],
}
