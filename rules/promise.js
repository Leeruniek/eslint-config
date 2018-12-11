/* eslint-env node */

module.exports = {
  plugins: ["promise"],
  rules: {
    /*
     * Ensure that each time a then() is applied to a promise, a catch()
     * is applied as well. Exceptions are made if you are returning that
     * promise.
     */
    "promise/catch-or-return": "error",

    /*
     * Ensure that inside a then() you make sure to return a new promise
     * or value.
     *
     * http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
     * (rule #5) for more info on why that's a good idea.
     *
     * We also allow someone to throw inside a then() which is essentially
     * the same as return Promise.reject().
     */
    "promise/always-return": "off",

    /*
     * Ensure that inside a then() or a catch() we always return or throw
     * a raw value instead of wrapping in Promise.resolve or Promise.reject
     */
    "promise/no-return-wrap": ["error", { allowReject: false }],

    // Enforce standard parameter names for Promise constructors
    "promise/param-names": "error",

    /*
     * Ensure that Promise is included fresh in each file instead of
     * relying on the existence of a native promise implementation.
     * Helpful if you want to use bluebird or if you don't intend to use
     * an ES6 Promise shim.
     */
    "promise/no-native": "off",

    // Avoid nested .then() or .catch() statements
    "promise/no-nesting": "warn",

    // Avoid using promises inside of callbacks
    "promise/no-promise-in-callback": "warn",

    // Avoid calling cb() inside of a then() (use nodeify] instead)
    "promise/no-callback-in-promise": "warn",

    /*
     * Avoid creating new promises outside of utility libs (use pify
     * instead)
     */
    "promise/avoid-new": "warn",

    // Prefer await to then() for reading Promise values
    "promise/prefer-await-to-then": "off",

    // Prefer async/await to the callback pattern
    "promise/prefer-await-to-callbacks": "off",

    /*
     * Disallow return statements inside a callback passed to finally(),
     * since nothing would consume what's returned.
     */
    "promise/no-return-in-finally": "warn",
  },
}
