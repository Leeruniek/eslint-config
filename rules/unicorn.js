/* eslint-env node */

module.exports = {
  plugins: [ "unicorn" ],
  rules  : {
    /*
     * Enforces all linted files to have their names in a certain case
     * style. Default is kebabCase.
     *
     * kebabCase:
     *      foo-bar.js
     *      foo-bar.test.js
     *      foo-bar.test-utils.js
     */
    "unicorn/filename-case": [ "warn", {
      case: "kebabCase",
    } ],

    // Enforce explicitly comparing the length property of a value
    "unicorn/explicit-length-check": [ "error", {
      "non-zero": "not-equal",
    } ],

    // Require new when throwing an error
    "unicorn/throw-new-error": "error",

    // Enforce lowercase identifier and uppercase value for number literals
    "unicorn/number-literal-case": "error",

    // Require escape sequences to use uppercase values
    "unicorn/escape-case": "error",

    // Require Array.isArray() instead of instanceof Array
    "unicorn/no-array-instanceof": "error",

    /*
     * Enforce the use of Buffer.from() and Buffer.alloc() instead of the
     * deprecated new Buffer()
     */
    "unicorn/no-new-buffer": "error",

    // Enforce the use of unicode escapes instead of hexadecimal escapes
    "unicorn/no-hex-escape": "error",

    // Enforce correct Error subclassing
    "unicorn/custom-error-definition": "error",

    /*
     * Prefer String#startsWith & String#endsWith over more complex
     * alternatives
     */
    "unicorn/prefer-starts-ends-with": "error",

    // Enforce throwing TypeError in type checking conditions
    "unicorn/prefer-type-error": "error",

    /*
     * Enforce the use of new for all builtins, except String, Number and
     * Boolean
     */
    "unicorn/new-for-builtins": "error",

    // Enforce the use of regex shorthands to improve readability
    "unicorn/regex-shorthand": "error",

    /*
     * Disallow unsafe regular expressions. Uses safe-regex to disallow
     * potentially catastrophic exponential-time regular expressions.
     */
    "unicorn/no-unsafe-regex": "error",

    /*
     * Enforce passing a message value when throwing a built-in error
     */
    "unicorn/error-message": "error",
  },
}
