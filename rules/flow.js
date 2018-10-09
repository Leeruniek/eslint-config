/* eslint-env node */

module.exports = {
  plugins: ["flowtype", "flowtype-errors"],

  extends: ["prettier/flowtype"],

  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },

  /*
   * Disabled by prettier
   * https://github.com/prettier/eslint-config-prettier/blob/master/flowtype.js
   *
   * "flowtype/boolean-style": "off",
   * "flowtype/delimiter-dangle": "off",
   * "flowtype/generic-spacing": "off",
   * "flowtype/object-type-delimiter": "off",
   * "flowtype/semi": "off",
   * "flowtype/space-after-type-colon": "off",
   * "flowtype/space-before-generic-bracket": "off",
   * "flowtype/space-before-type-colon": "off",
   * "flowtype/union-intersection-spacing": "off"
   */

  rules: {
    /*
     * Enforces a particular style for type imports: 'declaration' style
     * import type {T, U, V} from '...';
     */
    "flowtype-errors/type-import-style": ["error", "declaration"],

    /*
     * Requires all type declarations to be at the top of the file, after any
     * import declarations.
     */
    "flowtype-errors/require-types-at-top": "never",

    /*
     * An extension of ESLint's no-unused-expressions. This rule ignores type
     * cast expressions, but otherwise behaves the same as ESLint's
     * no-unused-expressions.
     */
    "flowtype-errors/no-unused-expressions": "error",

    // Type[] instead of Array<Type>
    "flowtype-errors/array-style-complex-type": ["error", "shorthand"],

    // string[] instead of Array<string>
    "flowtype-errors/array-style-simple-type": ["error", "shorthand"],

    // Show flow errors
    "flowtype-errors/show-errors": "error",

    // Error if flow coverage is below 80%
    "flowtype-errors/enforce-min-coverage": ["error", 80],

    /*
     * Enforces that `@flow` annotations be followed by an empty line,
     * separated by newline
     */
    "flowtype/newline-after-flow-annotation": ["error", "always"],

    /*
     * Marks Flow type identifiers as defined.
     * Used to suppress no-undef reporting of type identifiers.
     */
    "flowtype/define-flow-type": 1,

    // Report all object type definitions that aren't exact.
    "flowtype/require-exact-type": ["error", "always"],

    /*
     * Checks for duplicate properties in Object annotations.
     * Same as eslint "no-dupe-keys".
     */
    "flowtype/no-dupe-keys": "error",

    /*
     * Disallows use of primitive constructors as types, such as Boolean,
     * Number and String.
     */
    "flowtype/no-primitive-constructor-types": "error",

    /*
     * Disallows Flow type imports, aliases, and annotations in files
     * missing a valid Flow file declaration (or a @noflow annotation).
     */
    "flowtype/no-types-missing-file-annotation": "error",

    /*
     * Warns against weak type annotations any, Object and Function. These
     * types can cause flow to silently skip over portions of your code,
     * which would have otherwise caused type errors.
     */
    "flowtype/no-weak-types": [
      "error",
      {
        Function: false,
        Object: false,
        any: true,
      },
    ],

    "flowtype/no-existential-type": "error",

    // Requires that all function parameters have type annotations.
    "flowtype/require-parameter-type": "off",

    // Requires that functions have return type annotation.
    "flowtype/require-return-type": "error",

    /*
     * This rule can optionally report missing or missed placed
     * annotations, common typos (e.g. // @floww), and enforce a
     * consistant annotation style.
     */
    "flowtype/require-valid-file-annotation": [
      "error",
      "always",
      {
        annotationStyle: "line",
      },
    ],

    // Requires that all variable declarators have type annotations.
    "flowtype/require-variable-type": "off",

    // Enforces sorting of Object annotations. Same as eslint "sort-keys"
    "flowtype/sort-keys": "off",

    // Enforces a consistent naming pattern for type aliases.
    "flowtype/type-id-match": ["error", "^([A-Z][a-z0-9]+)+Type$"],

    /*
     * Marks Flow type alias declarations as used.
     * Used to suppress no-unused-vars errors that are triggered by type
     * aliases.
     */
    "flowtype/use-flow-type": 1,

    //
    "flowtype/valid-syntax": 1,
  },
}
