/* eslint-env node */

module.exports = {
  /*
   * Disabled by prettier
   * https://github.com/prettier/eslint-config-prettier/blob/master/index.js
   *
   *  curly: 0,
   * "lines-around-comment": 0,
   * "max-len": 0,
   * "no-confusing-arrow": 0,
   * "no-mixed-operators": 0,
   * "no-tabs": 0,
   * "no-unexpected-multiline": 0,
   * quotes: 0,
   * // The rest are rules that you never need to enable when using Prettier.
   * "array-bracket-newline": "off",
   * "array-bracket-spacing": "off",
   * "array-element-newline": "off",
   * "arrow-parens": "off",
   * "arrow-spacing": "off",
   * "block-spacing": "off",
   * "brace-style": "off",
   * "comma-dangle": "off",
   * "comma-spacing": "off",
   * "comma-style": "off",
   * "computed-property-spacing": "off",
   * "dot-location": "off",
   * "eol-last": "off",
   * "func-call-spacing": "off",
   * "function-paren-newline": "off",
   * "generator-star": "off",
   * "generator-star-spacing": "off",
   * "implicit-arrow-linebreak": "off",
   * indent: "off",
   * "indent-legacy": "off",
   * "jsx-quotes": "off",
   * "key-spacing": "off",
   * "keyword-spacing": "off",
   * "multiline-ternary": "off",
   * "newline-per-chained-call": "off",
   * "new-parens": "off",
   * "no-arrow-condition": "off",
   * "no-comma-dangle": "off",
   * "no-extra-parens": "off",
   * "no-extra-semi": "off",
   * "no-floating-decimal": "off",
   * "no-mixed-spaces-and-tabs": "off",
   * "no-multi-spaces": "off",
   * "no-multiple-empty-lines": "off",
   * "no-reserved-keys": "off",
   * "no-space-before-semi": "off",
   * "no-spaced-func": "off",
   * "no-trailing-spaces": "off",
   * "no-whitespace-before-property": "off",
   * "no-wrap-func": "off",
   * "nonblock-statement-body-position": "off",
   * "object-curly-newline": "off",
   * "object-curly-spacing": "off",
   * "object-property-newline": "off",
   * "one-var-declaration-per-line": "off",
   * "operator-linebreak": "off",
   * "padded-blocks": "off",
   * "quote-props": "off",
   * "rest-spread-spacing": "off",
   * semi: "off",
   * "semi-spacing": "off",
   * "semi-style": "off",
   * "space-after-function-name": "off",
   * "space-after-keywords": "off",
   * "space-before-blocks": "off",
   * "space-before-function-paren": "off",
   * "space-before-function-parentheses": "off",
   * "space-before-keywords": "off",
   * "space-in-brackets": "off",
   * "space-in-parens": "off",
   * "space-infix-ops": "off",
   * "space-return-throw-case": "off",
   * "space-unary-ops": "off",
   * "space-unary-word-ops": "off",
   * "switch-colon-spacing": "off",
   * "template-curly-spacing": "off",
   * "template-tag-spacing": "off",
   * "unicode-bom": "off",
   * "wrap-iife": "off",
   * "wrap-regex": "off",
   * "yield-star-spacing": "off"
   */

  rules: {
    /**
     * This rule looks for any underscores (_) located within the source
     * code. It ignores leading and trailing underscores and only checks
     * those in the middle of a variable name. If ESLint decides that the
     * variable is a constant (all uppercase), then no warning will be
     * thrown. Otherwise, a warning will be thrown. This rule only flags
     * definitions and assignments but not function calls. In case of ES6
     * import statements, this rule only targets the name of the variable
     * that will be imported into the local module scope.
     */
    camelcase: ["error", { properties: "never" }],

    /*
     * Enforces two things about variables with the designated alias names
     * for this:
     *      - If a variable with a designated name is declared, it must be
     *      either initialized (in the declaration) or assigned (in the
     *      same scope as the declaration) the value this.
     *
     *      - If a variable is initialized or assigned the value this, the
     *      name of the variable must be a designated alias.
     *
     *  With arrow functions this should not matter and pattern not be
     *  used anymore.
     */
    "consistent-this": ["error", "self"],

    /*
     * Require or disallow named function expressions
     *
     * A pattern that’s becoming more common is to give function
     * expressions names to aid in debugging. For example:
     *
     * Foo.prototype.bar = function bar() {};
     *
     * Adding the second bar in the above example is optional. If you
     * leave off the function name then when the function throws an
     * exception you are likely to get something similar to anonymous
     * function in the stack trace. If you provide the optional name for a
     * function expression then you will get the name of the function
     * expression in the stack trace.
     */
    "func-names": ["error", "always"],

    /*
     * "There are only two hard things in Computer Science:
     * cache invalidation and naming things."
     * — Phil Karlton
     *
     * Bad names can lead to hard-to-decipher code. Generic names, such as
     * data, don’t infer much about the code and the values it receives.
     * This rule allows you to configure a blacklist of bad identifier
     * names, that you don’t want to see in your code.
     *
     * Removing "data" because VueJS
     */
    "id-blacklist": ["error", "err", "e", "cb", "callback"],

    /*
     * This rule requires constructor names to begin with a capital
     * letter. Certain built-in identifiers are exempt from this rule.
     * These identifiers are:
     */
    "new-cap": "error",

    /*
     * This rule enforces a coding style where empty lines are required or
     * disallowed after var, let, or const statements to achieve a
     * consistent coding style across the project.
     */
    "newline-after-var": ["error", "always"],

    /*
     * This rule requires an empty line before return statements to
     * increase code clarity, except when the return is alone inside a
     * statement group (such as an if statement). In the latter case, the
     * return statement does not need to be delineated by virtue of it
     * being alone. Comments are ignored and do not count as empty lines.
     */
    "newline-before-return": "error",

    /*
     * This rule disallows if statements as the only statement in else
     * blocks.
     */
    "no-lonely-if": "error",

    /*
     * This rule disallows using multiple assignments within a single
     * statement.
     */
    "no-multi-assign": "error",

    // Enforces the consistent use of empty lines.
    "no-multiple-empty-lines": [
      "error",
      {
        max: 2,
        maxBOF: 0,
        maxEOF: 1,
      },
    ],

    /*
     * This rule disallows negated conditions in either of the following:
     *      - if statements which have an else branch
     *      - ternary expressions
     */
    "no-negated-condition": "error",

    /*
     * This rule disallow ternary operators when simpler alternatives
     * exist.
     */
    "no-unneeded-ternary": [
      "error",
      {
        defaultAssignment: true,
      },
    ],

    /*
     * This rule enforces variables to be declared either together or
     * separately per function ( for var) or block (for let and const)
     * scope.
     */
    "one-var": "off",

    /*
     * This rule requires or disallows blank lines between the given 2
     * kinds of statements. Properly blank lines help developers to
     * understand the code.
     */
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        next: "return",
        prev: "var",
      },
    ],

    /*
     * Checks all property definitions of object expressions and verifies
     * That all variables are sorted alphabetically.
     */
    "sort-keys": "off",

    /*
     * This rule checks all variable declaration blocks and verifies that
     * all variables are sorted alphabetically. The default configuration
     * of the rule is case-sensitive.
     */
    "sort-vars": "off",

    /*
     * This rule improves readability by enforcing lines between class
     * members. It will not check empty lines before the first member and
     * after the last member, since that is already taken care of by
     * padded-blocks.
     */
    "lines-between-class-members": ["error", "always"],
  },
}
