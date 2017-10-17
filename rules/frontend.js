/* eslint-env node */

module.exports = {
  env: {
    browser: true,
    es6    : true,
    node   : false,
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
    "./compat",
    "./promise",
    "./html",
    "./react",
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
