/* eslint-env node */

module.exports = {
  rules: {
    // Enforce or disallow variable initializations at definition
    "init-declarations": 0,

    /*
     * Disallow the catch clause parameter name being the same as a
     * variable in the outer scope
     */
    "no-catch-shadow": 0,

    // Disallow deletion of variables
    "no-delete-var": "error",

    // Disallow labels that share a name with a variable
    "no-label-var": 0,

    /*
     * Disallow declaration of variables already declared in the outer
     * scope.
     */
    "no-shadow": "error",

    // Disallow shadowing of names such as arguments
    "no-shadow-restricted-names": "error",

    /*
     * Disallow use of undeclared variables unless mentioned in a
     * global block
     */
    "no-undef": "error",

    // Disallow use of undefined when initializing variables
    "no-undef-init": 0,

    // Disallow use of undefined variable
    "no-undefined": 0,

    // Disallow declaration of variables that are not used in the code
    "no-unused-vars": [
      "error",
      {
        args: "after-used",
        varsIgnorePattern: "debug",
      },
    ],

    // Disallow use of variables before they are defined
    "no-use-before-define": "error",

    // Require that all functions are run in strict mode
    strict: ["error", "never"],

    /*
     * Prefer destructuring from arrays and objects
     *
     * With JavaScript ES6, a new syntax was added for creating variables
     * from an array index or object property, called destructuring. This
     * rule enforces usage of destructuring instead of accessing a
     * property through a member expression.
     */
    "prefer-destructuring": [
      "warn",
      {
        object: false,
        array: true,
      },
    ],
  },
}
