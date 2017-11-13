/* eslint-env node */

module.exports = {

  plugins: [ "jest" ],

  env: {
    // Whitelist the environment variables provided by Jest
    "jest/globals": true,
  },

  rules: {
    /*
     * Jest has a feature that allows you to skip tests by appending .skip
     * or prepending x to a test-suite or a test-case. Sometimes tests are
     * skipped as part of a debugging process and aren't intended to be
     * committed. This rule reminds you to remove .skip or the x prefix
     * from your tests.
     */
    "jest/no-disabled-tests": "warn",

    /*
     * Jest has a feature that allows you to focus tests by appending
     * .only or prepending f to a test-suite or a test-case. This feature
     * is really helpful to debug a failing test, so you don’t have to
     * execute all of your tests. After you have fixed your test and
     * before committing the changes you have to remove .only to ensure
     * all tests are executed on your build system.
     */
    "jest/no-focused-tests": "error",

    /*
     * Having identical titles for two different tests or test suites may
     * create confusion. For example, when a test with the same title as
     * another test in the same test suite fails, it is harder to know
     * which one failed and thus harder to fix.
     */
    "jest/no-identical-title": "error",

    /*
     * Ensure expect() is called with a single argument and there is an
     * actual expectation made.
     */
    "jest/valid-expect": "error",

    /*
     * In order to have a better failure message, toHaveLength() should be
     * used upon asserting expectations on object's length property.
     */
    "jest/prefer-to-have-length": "error",
  },
}
