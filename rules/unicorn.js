/* eslint-env node */

module.exports = {
  plugins: [ "unicorn" ],
  rules  : {
    /*
     * Enforces all linted files to have their names in a certain case
     * style. Default is kebabCase.
     * 
     * camelCase:
     *  fooBar.js
     *  fooBar.test.js
     *  fooBar.testUtils.js
     */
    "unicorn/filename-case": [ "warn", {
      case: "camelCase",
    } ],
  },
}
