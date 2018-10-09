/* eslint-env node */

module.exports = {
  rules: {
    // Enforce return after a callback
    "callback-return": 0,

    // Disallow require() outside of the top-level module scope
    "global-require": 0,

    // Enforces error handling in callbacks (node environment)
    "handle-callback-err": 0,

    /*
     * In Node.js, the behavior of the Buffer constructor is different
     * depending on the type of its argument. Passing an argument from
     * user input to Buffer() without validating its type can lead to
     * security vulnerabilities such as remote memory disclosure and
     * denial of service. As a result, the Buffer constructor has been
     * deprecated and should not be used. Use the producer methods
     * Buffer.from, Buffer.alloc, and Buffer.allocUnsafe instead.
     */
    "no-buffer-constructor": "error",

    // Disallow mixing regular variable and require declarations
    "no-mixed-requires": [0, false],

    // Disallow use of new operator with the require function
    "no-new-require": 0,

    // Disallow string concatenation with __dirname and __filename
    "no-path-concat": 0,

    // Disallow process.exit()
    "no-process-exit": 0,

    // Restrict usage of specified node modules
    "no-restricted-modules": 0,

    /*
     * In Node.js, most I/O is done through asynchronous methods. However,
     * there are often synchronous versions of the asynchronous methods.
     * For example, fs.exists() and fs.existsSync(). In some contexts,
     * using synchronous operations is okay (if, as with ESLint, you are
     * writing a command line utility). However, in other contexts the use
     * of synchronous operations is considered a bad practice that should
     * be avoided. For example, if you are running a high-travel web
     * server on Node.js, you should consider carefully if you want to
     * allow any synchronous operations that could lock up the server.
     */
    "no-sync": [
      "error",
      {
        allowAtRootLevel: true,
      },
    ],
  },
}
