/* eslint-env node */

module.exports = {
  rules: {
    // Enforces getter/setter pairs in objects
    "accessor-pairs": 0,

    // Treat var statements as if they were block scoped
    "block-scoped-var": "error",

    // Specify the maximum cyclomatic complexity allowed in a program
    complexity: [0, 5],

    // Require return statements to either always or never specify values
    "consistent-return": "error",

    // Require default case in switch statements
    "default-case": "error",

    // Encourages use of dot notation whenever possible
    "dot-notation": [
      "error",
      {
        allowKeywords: true,
      },
    ],

    // Require the use of === and !==
    eqeqeq: "error",

    // Make sure for-in loops have an if statement
    "guard-for-in": "error",

    // Disallow the use of alert, confirm, and prompt
    "no-alert": 1,

    // Disallow use of arguments.caller or arguments.callee
    "no-caller": "error",

    // Disallow lexical declarations in case clauses
    "no-case-declarations": "error",

    /*
     * Disallow division operators explicitly at beginning of regular
     * expression
     */
    "no-div-regex": 0,

    // Disallow else after a return in an if
    "no-else-return": [
      "error",
      {
        allowElseIf: false,
      },
    ],

    // Disallow use of empty destructuring patterns
    "no-empty-pattern": 0,

    // Disallow comparisons to null without a type-checking operator
    "no-eq-null": 0,

    // Disallow use of eval()
    "no-eval": "error",

    // Disallow adding to native types
    "no-extend-native": "error",

    // Disallow unnecessary function binding
    "no-extra-bind": "error",

    // Disallow fallthrough of case statements
    "no-fallthrough": "error",

    // Disallow the type conversions with shorter notations
    "no-implicit-coercion": 0,

    // Disallow use of eval()-like methods
    "no-implied-eval": "error",

    // Disallow this keywords outside of classes or class-like objects
    "no-invalid-this": 0,

    // Disallow usage of __iterator__ property
    "no-iterator": "error",

    // Disallow use of labels for anything other then loops and switches
    "no-label": 0,

    // Disallow use of labeled statements
    "no-labels": "error",

    // Disallow unnecessary nested blocks
    "no-lone-blocks": "error",

    // Disallow creation of functions within loops
    "no-loop-func": "error",

    // Disallow the use of magic numbers
    "no-magic-numbers": 0,

    // Disallow use of multiline strings
    "no-multi-str": "error",

    // Disallow reassignments of native objects
    "no-native-reassign": "error",

    /*
     * Disallow use of new operator when not part of the assignment or
     * Comparison
     */
    "no-new": "error",

    // Disallow use of new operator for Function object
    "no-new-func": "error",

    // Disallows creating new instances of String,Number, and Boolean
    "no-new-wrappers": "error",

    // Disallow use of (old style) octal literals
    "no-octal": "error",

    /*
     * Disallow use of octal escape sequences in string literals, such as
     * Var foo = "Copyright \251";
     */
    "no-octal-escape": "error",

    // Disallow reassignment of function parameters
    "no-param-reassign": [
      "error",
      {
        props: false,
      },
    ],

    // Disallow use of process.env
    "no-process-env": 0,

    // Disallow usage of __proto__ property
    "no-proto": "error",

    // Disallow declaring the same variable more then once
    "no-redeclare": "error",

    // Disallow use of assignment in return statement
    "no-return-assign": "error",

    // Disallow use of `javascript:` urls.
    "no-script-url": "error",

    // Disallow comparisons where both sides are exactly the same
    "no-self-compare": "error",

    // Disallow use of comma operator
    "no-sequences": "error",

    // Restrict what can be thrown as an exception
    "no-throw-literal": "error",

    // Disallow usage of expressions in statement position
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],

    // Disallow unnecessary .call() and .apply()
    "no-useless-call": 0,

    // Disallow unnecessary concatenation of literals or template literals
    "no-useless-concat": 0,

    // Disallow use of void operator
    "no-void": 0,

    // Disallow usage of configurable warning terms in comments: e.g. todo
    "no-warning-comments": [
      0,
      {
        location: "start",
        terms: ["todo", "fixme", "xxx"],
      },
    ],

    // Disallow use of the with statement
    "no-with": "error",

    // Require use of the second argument for parseInt()
    radix: "error",

    // Requires to declare all vars on top of their containing scope
    "vars-on-top": "error",

    // Require or disallow Yoda conditions
    yoda: 0,
  },
}
