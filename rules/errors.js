/* eslint-env node */

module.exports = {
  rules: {
    /*
     * A for loop with a stop condition that can never be reached, such as
     * one with a counter that moves in the wrong direction, will run
     * infinitely. While there are occasions when an infinite loop is
     * intended, the convention is to construct such loops as while loops.
     * More typically, an infinite for loop is a bug.
     */
    "for-direction": "error",

    // Disallow assignment in conditional expressions
    "no-cond-assign": ["error", "always"],

    // Disallow use of console
    "no-console": 1,

    // Disallow use of constant expressions in conditions
    "no-constant-condition": 1,

    // Disallow control characters in regular expressions
    "no-control-regex": "error",

    // Disallow use of debugger
    "no-debugger": 1,

    // Disallow duplicate arguments in functions
    "no-dupe-args": "error",

    // Disallow duplicate keys when creating object literals
    "no-dupe-keys": "error",

    // Disallow a duplicate case label.
    "no-duplicate-case": "error",

    // Disallow empty statements
    "no-empty": "error",

    // Disallow the use of empty character classes in regular expressions
    "no-empty-character-class": "error",

    // Disallow assigning to the exception in a catch block
    "no-ex-assign": "error",

    // Disallow double-negation boolean casts in a boolean context
    "no-extra-boolean-cast": 0,

    // Disallow overwriting functions written as function declarations
    "no-func-assign": "error",

    // Disallow function or variable declarations in nested blocks
    "no-inner-declarations": "error",

    /*
     * Disallow invalid regular expression strings in the RegExp
     * Constructor
     */
    "no-invalid-regexp": "error",

    // Disallow irregular whitespace outside of strings and comments
    "no-irregular-whitespace": "error",

    // Disallow negation of the left operand of an in expression
    "no-negated-in-lhs": "error",

    /*
     * Disallow the use of object properties of the global object (Math
     * And JSON) as functions
     */
    "no-obj-calls": "error",

    // Disallow multiple spaces in a regular expression literal
    "no-regex-spaces": "error",

    /*
     * This rule disallows sparse array literals which have "holes" where
     * Commas are not preceded by elements. It does not apply to a
     * Trailing comma following the last element.
     */
    "no-sparse-arrays": "error",

    /*
     * Disallow unreachable statements after a return, throw, continue, or
     * Break statement
     */
    "no-unreachable": "error",

    // Disallow comparisons with the value NaN
    "use-isnan": "error",

    /*
     * Ensure that the results of typeof are compared against a valid
     * String
     */
    "valid-typeof": "error",

    // Enforces that a return statement is present in property getters
    "getter-return": "error",

    /*
     * The parseInt() and Number.parseInt() functions can be used to turn
     * binary, octal, and hexadecimal strings into integers. As binary,
     * octal, and hexadecimal literals are supported in ES6, this rule
     * encourages use of those numeric literals instead of parseInt() or
     * Number.parseInt().
     *
     * 0b111110111 === 503; // not parseInt("111110111", 2) === 503;
     * 0o767 === 503; // not parseInt("767", 8) === 503;
     */
    "prefer-numeric-literals": "error",
  },
}
