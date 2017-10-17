/* eslint-env node */

module.exports = {
  rules: {

    /*
     * Enforce a consistent style of comments across your codebase,
     * specifically by either requiring or disallowing a capitalized
     * letter as the first word character in a comment. This rule will not
     * issue warnings when non-cased letters are used.
     */
    "capitalized-comments": "off",

    /*
     * Enforces consistent position of line comments. Block comments are
     * not affected by this rule. By default, this rule ignores comments
     * starting with the following words: eslint, jshint, jslint,
     * istanbul, global, exported, jscs, falls through.
     */
    "line-comment-position": [ "error", {
      position: "above",
    } ],

    /*
     * This rule requires empty lines before and/or after comments. It can
     * be enabled separately for both block (/*) and line (//) comments.
     * This rule does not apply to comments that appear on the same line
     * as code and does not require empty lines at the beginning or end of
     * a file.
     */
    "lines-around-comment": [ "error", {
      afterBlockComment : false,
      afterLineComment  : false,
      allowArrayStart   : true,
      allowBlockStart   : true,
      allowObjectStart  : true,
      beforeBlockComment: true,
      beforeLineComment : true,
    } ],

    // Disallow usage of configurable warning terms in comments: e.g. todo
    "no-warning-comments": [ 0, {
      location: "start",
      terms   : [ "todo", "fixme", "xxx" ],
    } ],

    /*
     * Enforce consistency of spacing after the start of a comment // or
     * /*. It also provides several exceptions for various documentation
     * styles.
     */
    "spaced-comment": [ "error", "always" ],

    /*
     * This rule aims to enforce a particular style for
     * multiline comments.
     */
    "multiline-comment-style": [ "error", "starred-block" ],
  },
}
