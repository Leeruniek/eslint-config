/* eslint-env node */

module.exports = {
  rules: {
    /*
     * JSDoc is a JavaScript API documentation generator. It uses
     * specially-formatted comments inside of code to generate API
     * documentation automatically.
     */
    "require-jsdoc": [
      "error",
      {
        require: {
          ArrowFunctionExpression: false,
          ClassDeclaration: false,
          FunctionDeclaration: true,
          MethodDefinition: false,
        },
      },
    ],

    // Ensure JSDoc comments are valid
    "valid-jsdoc": [
      "error",
      {
        requireReturn: false,
        requireReturnDescription: false,
        requireReturnType: true,
      },
    ],
  },
}
