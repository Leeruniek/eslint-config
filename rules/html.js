/* eslint-env node */

module.exports = {
  plugins: ["html"],
  settings: {
    /*
     * By default, this plugin will only consider files ending with those
     * extensions as HTML: .erb, .handlebars, .hbs, .htm, .html,
     * .mustache, .nunjucks, .php, .tag, .twig, .vue, .we. You can set
     * your own list of HTML extensions by using this setting. Example:
     */
    "html/html-extensions": [
      ".erb",
      ".handlebars",
      ".hbs",
      ".htm",
      ".html",
      ".mustache",
      ".nunjucks",
      ".php",
      ".tag",
      ".twig",
      ".vue",
      ".we",
    ],

    /*
     * By default, this plugin will only consider files ending with those
     * extensions as XML: .xhtml, .xml. You can set your own list of XML
     * extensions by using this setting. Example:
     */
    "html/xml-extensions": [".xhtml", ".xml"],

    /*
     * Indentation is the <script> indentation plus two spaces.
     */
    "html/indent": "+0",

    /*
     * By default, this plugin won't warn if it encounters a problematic
     * indentation (ex: a line is under indented). If you want to make
     * sure the indentation is correct, use the html/report-bad-indent in
     * conjunction with the indent rule. Pass "warn" or 1 to display
     * warnings, "error" or 2 to display errors. Example:
     */
    "html/report-bad-indent": "error",

    /*
     * By default, the code between <script> tags is considered as
     * JavaScript code only if there is no type attribute or if its value
     * matches the pattern:
     * /^(application|text)\/(x-)?(javascript|babel|ecmascript-6)$/i
     *
     * You can customize the types that should be considered as JavaScript
     * by providing one or multiple MIME types. If a MIME type starts with
     * a /, it will be considered as a regular expression.
     */
    "html/javascript-mime-types":
      "/^(application|text)/(x-)?(javascript|babel|ecmascript-6)$/i",
  },
}
