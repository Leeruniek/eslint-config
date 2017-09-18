<!-- markdownlint-disable no-duplicate-header -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.8.0] - 18 September 2017

Updated main packages (`eslint` & `flow-bin`) & others that kept up with eslint 4.7 update

### Changed

- [`package.json`](https://github.com/codemachiner/eslint-config/blob/master/package.json)

## [2.7.2] - 18 August 2017

Removed Flow from both bundles, need to be loaded separately

### Added

- React [`boolean-prop-naming`](https://github.com/codemachiner/eslint-config/blob/master/rules/react.js#L85), [`no-typos`](https://github.com/codemachiner/eslint-config/blob/master/rules/react.js#L93) and [`jsx-boolean-value`](https://github.com/codemachiner/eslint-config/blob/master/rules/react.js#L40)

### Changed

- Removed [`flow`](https://github.com/codemachiner/eslint-config/blob/master/rules/flow.js) from both bundles. Need to include it [separately](https://github.com/codemachiner/eslint-config#flowtype--flowtype-errors)

## [2.7.1] - 4 August 2017

### Added

- New [`eslint-plugin-flowtype-errors`](https://github.com/codemachiner/eslint-config#eslint-plugin-flowtype-errors) to the [flow](https://github.com/codemachiner/eslint-config/blob/master/rules/flow.js#L4) config. It runs flow  and passes the errors as linting error.

### Changed

- [`prefer-destructuring`](https://github.com/codemachiner/eslint-config/blob/master/rules/backend.js#62) - set rule to warn and disabled for objects (was a nuisance)
- Removed [`jest`](https://github.com/codemachiner/eslint-config/blob/master/rules/jest.js) from frontend bundle. Need to include it [separately](https://github.com/codemachiner/eslint-config#eslint-plugin-jest)

## [2.6.0] - 23 July 2017

Updated to [ESLint 4.3](http://eslint.org/blog/2017/07/eslint-v4.3.0-released) and added support for [Jest](https://github.com/facebook/jest) testing framework.

### Added

- Plugin [`eslint-plugin-jest`](https://www.npmjs.org/package/eslint-plugin-jest) with rules in [`/rules/jest.js`](https://github.com/codemachiner/eslint-config/blob/master/rules/jest.js) and part of [`frontend`](https://github.com/codemachiner/eslint-config/blob/master/rules/frontend.js#L24)
- ESLint rule [`prefer-numeric-literals`](http://eslint.org/docs/rules/prefer-numeric-literals): Disllow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
    - Defined in [`errors.js`](https://github.com/codemachiner/eslint-config/blob/master/rules/errors.js#L115)
    - Current value: `"prefer-numeric-literals": "error"`
- ESLint rule [`prefer-destructuring`](http://eslint.org/docs/rules/prefer-destructuring): Prefer destructuring from arrays and objects.
    - Defined in [`variables.js`](https://github.com/codemachiner/eslint-config/blob/master/rules/variables.js#L63)
    - Current value:
        ```javascript
        "prefer-destructuring": [
            "error", {
                object: true,
                array : true,
            }, {
                enforceForRenamedProperties: true,
            },
        ],
        ```
    - Sample:
        ```javascript
        const array = [ 1,2,3,4,5 ]
        const lorem = {
            bar: "ipsum",
            foo: "dolor",
        }

        // const someIndex = 2
        // const foo = array[ someIndex ]
        const [ ,,foo ] = array

        // const bar = lorem.bar
        let { bar } = lorem;

        ( { bar } = {
            bar: 2,
            foo: 3,
        } );

        ( { foo: bar } = lorem )
        ```

## [2.5.1] - 21 July 2017

### Changed

Updated [`rules/style.js`](https://github.com/codemachiner/eslint-config/blob/master/rules/style.js#L263):

- changed [`object-curly-newline`](http://eslint.org/docs/rules/object-curly-newline)
- added [`object-property-newline`](http://eslint.org/docs/rules/object-property-newline)

Needed to satisfy:

```javascript
const a = { }
const obj = {
    foo: "foo",
    bar: "bar",
    baz: "baz",
}
let {} = obj
const obj2 = {
    foo: "foo",
    bar: "bar",
    baz: "baz",
}
const { f } = obj
const { g, h } = obj
const {
    i,
    j,
} = obj
const e = {
    foo( { x, y } ) {
        dosomething()
    },
}
const h = ( opt = {} ) => ( {
    x: 2,
    y: opt,
} )
```

## [2.5.0] - 16 July 2017

Added [`eslint-plugin-compat`](https://www.npmjs.com/package/eslint-plugin-compat) to show browser compatibility (using [caniuse](http://caniuse.com/)) of certain functionalities, ex. `fetch`.

### Added

- `eslint-plugin-compat` with rules in [`/rules/compat.js`](https://github.com/codemachiner/eslint-config/blob/master/rules/compat.js)

### Changed

- Turn off `react/require-optimization`. Better put these kind of rules in your project's `.eslintrc`

## [2.4.0] - 13 July 2017

React support

### Added

- `eslint-plugin-react` with recommended rules in [`/rules/react.js`](https://github.com/codemachiner/eslint-config/blob/master/rules/react.js)

## 2.3.2 - 11 July 2017

### Added

- ESLint 4.2: new rule [`getter-return`](http://eslint.org/docs/rules/getter-return) -  Enforces that a return statement is present in property getters.
    - Defined in [`error.js`](https://github.com/codemachiner/eslint-config/blob/master/rules/errors.js)
    - Current value: `"getter-return": "error"`

### Changed

- ESLint 4.2 allows [`no-sync`](http://eslint.org/docs/rules/no-sync) using sync methods on top level.
    - Defined in [`node.js`](https://github.com/codemachiner/eslint-config/blob/master/rules/node.js)
    - Current value:

    ```javascript
    "no-sync": [
        "error", {
            allowAtRootLevel: true,
        },
    ],
    ```
- [`no-unexpected-multiline`](http://eslint.org/docs/rules/no-unexpected-multiline) to protect against edge cases of not using semicolons
    - Defined in [`error.js`](https://github.com/codemachiner/eslint-config/blob/master/rules/errors.js):
    - Current value: `"no-unexpected-multiline": "error"`

[Unreleased]: https://github.com/codemachiner/eslint-rules/compare/v2.8.0...HEAD
[2.8.0]: https://github.com/codemachiner/eslint-rules/compare/v2.7.2...v2.8.0
[2.7.2]: https://github.com/codemachiner/eslint-rules/compare/v2.7.1...v2.7.2
[2.7.1]: https://github.com/codemachiner/eslint-rules/compare/v2.6.0...v2.7.1
[2.6.0]: https://github.com/codemachiner/eslint-rules/compare/v2.5.1...v2.6.0
[2.5.1]: https://github.com/codemachiner/eslint-rules/compare/v2.5.0...v2.5.1
[2.5.0]: https://github.com/codemachiner/eslint-rules/compare/v2.4.0...v2.5.0
[2.4.0]: https://github.com/codemachiner/eslint-rules/compare/v2.3.2...v2.4.0
