/* eslint-env node */

module.exports = {
  rules: {
    // Require braces in arrow function body
    "arrow-body-style": ["error", "as-needed"],

    // Verify super() callings in constructors
    "constructor-super": 0,

    // Disallow modifying variables of class declarations
    "no-class-assign": 0,

    // Disallow modifying variables that are declared using const
    "no-const-assign": "error",

    // Disallow duplicate name in class members
    "no-dupe-class-members": 0,

    // Disallow to use this/super before super() calling in constructors.
    "no-this-before-super": 0,

    // Require let or const instead of var
    "no-var": "error",

    // Require method and property shorthand syntax for object literals
    "object-shorthand": ["warn", "always"],

    // Suggest using arrow functions as callbacks
    "prefer-arrow-callback": "warn",

    /*
     * Suggest using of const declaration for variables that are never
     * Modified after declared
     */
    "prefer-const": "error",

    // Suggest using Reflect methods where applicable
    "prefer-reflect": 0,

    // Suggest using the spread operator instead of .apply()
    "prefer-spread": 0,

    // Suggest using template literals instead of strings concatenation
    "prefer-template": "error",

    // Disallow generator functions that do not have yield
    "require-yield": 0,
  },
}
