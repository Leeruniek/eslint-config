# JavaScript ESLint rules

[![npm package version](https://badge.fury.io/js/%40leeruniek%2Feslint-config.svg)](https://badge.fury.io/js/%40leeruniek%2Feslint-config)
[![](https://david-dm.org/leeruniek/eslint-config/dev-status.svg)](https://david-dm.org/leeruniek/eslint-config?type=dev)
[![](https://david-dm.org/leeruniek/eslint-config/peer-status.svg)](https://david-dm.org/leeruniek/eslint-config?type=peer)

> JavaScript ESLint bundle with best practices and common use rules for writing more consistent code.
>
> [`"semi": [ "error", "never" ]`](http://eslint.org/docs/rules/semi) :godmode: ... [the horror](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding) :goberserk:

Other bundles: [XO](https://www.npmjs.com/package/xo), [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb), [eslint-config-google](https://github.com/google/eslint-config-google), [more](https://www.npmjs.com/search?q=+eslint-config-)

---

<!-- MarkdownTOC depth=2 autolink=true indent="    " -->

- [Installation & Usage](#installation--usage)
- [Rule sets](#rule-sets)
- [ESLint plugins used](#eslint-plugins-used)
    - [import](#import)
    - [json](#json)
    - [promise](#promise)
    - [unicorn](#unicorn)
    - [flowtype & flowtype-errors](#flowtype--flowtype-errors)
    - [html](#html)
    - [react](#react)
    - [compat](#compat)
    - [jest](#jest)
    - [no-inferred-method-name](#no-inferred-method-name)
- [Using with SublimeText](#using-with-sublimetext)
    - [SublimeLinter](#sublimelinter)
    - [Sublime​Linter-contrib-eslint](#sublime%E2%80%8Blinter-contrib-eslint)
    - [Fuzzy​File​Path](#fuzzy%E2%80%8Bfile%E2%80%8Bpath)
- [Formatting your code using ESLint rules](#formatting-your-code-using-eslint-rules)
    - [ESLint-Formatter](#eslint-formatter)
    - [eslint-watch](#eslint-watch)
- [Example of `.eslintrc.js`](#example-of-eslintrcjs)
- [Reading](#reading)
- [Changelog](#changelog)
- [2.7.2 - 18 August 2017](#272---18-august-2017)
    - [Added](#added)
    - [Changed](#changed)

<!-- /MarkdownTOC -->

## Installation & Usage

Requires ESLint >= 4.0.0

```bash
npm i eslint @leeruniek/eslint-config --save-dev
```

Run `npm info "@leeruniek/eslint-config@latest" peerDependencies` to get the dev packages you need to include in your own `package.json`.

It should be something like this:

```javascript
...
"devDependencies": {
    "eslint": "^4.4.1",
    "eslint-plugin-import": "^2.7.0",
    "eslint-plugin-json": "^1.2.0",
    "eslint-plugin-no-inferred-method-name": "^1.0.2",
    "eslint-plugin-promise": "^3.5.0",
    "eslint-plugin-unicorn": "^2.1.2"
}
...
```

Add `@leeruniek/eslint-config/rules/frontend` (or `/backend`) to the extends section of your `.eslintrc` configuration file:

```json
{
    "extends": [
        "@leeruniek/eslint-config/rules/frontend",
    ]
}
```

## Rule sets

[`frontend`](https://github.com/leeruniek/eslint-config/blob/master/rules/frontend.js) and [`backend`](https://github.com/leeruniek/eslint-config/blob/master/rules/backend.js) files are just bundles, each loading it's specific set of rule files.

```text
...
▾ rules/
  ≡ frontend.js
  ≡ backend.js

  ≡ best.practices.js   |
  ≡ comments.js         |
  ≡ errors.js           |
  ≡ es6.js              |
  ≡ import.js           |> included `frontend` & `backend`
  ≡ jsdoc.js            |
  ≡ promise.js          |
  ≡ style.js            |
  ≡ unicorn.js          |
  ≡ variables.js        |

  ≡ html.js             |
  ≡ react.js            |> only in `frontend`
  ≡ compat.js           |

  ≡ node.js             |> only in `backend`

  ≡ jest.js             |> not in any
  ≡ flow.js             |
...
```

## ESLint plugins used

### [import](https://www.npmjs.org/package/eslint-plugin-import)

Support for ES2015+ (ES6+) import/export syntax.  

- loaded in [`frontend`](https://github.com/leeruniek/eslint-config/blob/master/rules/frontend.js) & [`backend`](https://github.com/leeruniek/eslint-config/blob/master/rules/backend.js) bundles
- rules in [`@leeruniek/eslint-config/rules/import`](https://github.com/leeruniek/eslint-config/blob/master/rules/import.js)

### [json](https://www.npmjs.org/package/eslint-plugin-json)

Lint JSON files.

- loaded in [`frontend`](https://github.com/leeruniek/eslint-config/blob/master/rules/frontend.js) & [`backend`](https://github.com/leeruniek/eslint-config/blob/master/rules/backend.js) bundles

### [promise](https://www.npmjs.org/package/eslint-plugin-promise)

Enforce best practices for JavaScript promises.

- loaded in [`frontend`](https://github.com/leeruniek/eslint-config/blob/master/rules/frontend.js) & [`backend`](https://github.com/leeruniek/eslint-config/blob/master/rules/backend.js) bundles
- rules in [`@leeruniek/eslint-config/rules/promise`](https://github.com/leeruniek/eslint-config/blob/master/rules/promise.js)

### [unicorn](https://www.npmjs.org/package/eslint-plugin-unicorn)

Various awesome ESLint rules.

- loaded in [`frontend`](https://github.com/leeruniek/eslint-config/blob/master/rules/frontend.js) & [`backend`](https://github.com/leeruniek/eslint-config/blob/master/rules/backend.js) bundles
- rules in [`@leeruniek/eslint-config/rules/unicorn`](https://github.com/leeruniek/eslint-config/blob/master/rules/unicorn.js)

### [flowtype](https://www.npmjs.org/package/eslint-plugin-flowtype) & [flowtype-errors](https://www.npmjs.org/package/eslint-plugin-flowtype-errors)

- *flowtype*: [Flow](https://flow.org) specific linting rules.
- *flowtype-errors*: Runs your code through Flow and passes the type check errors as linting errors. Any editor that has ESLint support now supports Flow.

- not in peerDependencies: `npm install --save-dev eslint-plugin-flowtype flowtype-errors`
- not loaded in any bundle, need to extend it separately:
    ```js
    ...
    "extends": [
        "@leeruniek/eslint-config/rules/frontend",
        "@leeruniek/eslint-config/rules/flow",
    ],
    ...
    ```

- rules in [`@leeruniek/eslint-config/rules/flow`](https://github.com/leeruniek/eslint-config/blob/master/rules/flow.js)

### [html](https://www.npmjs.org/package/eslint-plugin-html)

Allows linting and fixing inline scripts contained in HTML files.

- not in peerDependencies: `npm install --save-dev eslint-plugin-html`
- loaded in [`frontend`](https://github.com/leeruniek/eslint-config/blob/master/rules/frontend.js) bundle
- rules in [`@leeruniek/eslint-config/rules/html`](https://github.com/leeruniek/eslint-config/blob/master/rules/html.js)

### [react](https://www.npmjs.org/package/eslint-plugin-react)

React specific linting rules.

- not in peerDependencies: `npm install --save-dev eslint-plugin-react`
- loaded in [`frontend`](https://github.com/leeruniek/eslint-config/blob/master/rules/frontend.js) bundle
- rules in [`@leeruniek/eslint-config/rules/react`](https://github.com/leeruniek/eslint-config/blob/master/rules/react.js)

### [compat](https://www.npmjs.org/package/eslint-plugin-compat)

Lint the browser compatibility of your code (using [caniuse](http://caniuse.com/)). Uses `browserslist` definition in your `package.json`.

```json
"browserslist": [
    "last 2 chrome versions",
    "last 2 firefox versions",
    "last 2 ie versions"
],
```

- not in peerDependencies: `npm install --save-dev eslint-plugin-compat`
- loaded in [`frontend`](https://github.com/leeruniek/eslint-config/blob/master/rules/frontend.js) bundle
- rules in [`@leeruniek/eslint-config/rules/compat`](https://github.com/leeruniek/eslint-config/blob/master/rules/compat.js)

### [jest](https://www.npmjs.org/package/eslint-plugin-jest)

[Jest](https://github.com/facebook/jest) is used by Facebook to test all JavaScript code including React applications and it integrates seamlessly with Babel.

- not in peerDependencies: `npm install --save-dev eslint-plugin-jest`
- not loaded in any bundle, need to extend it separately:
    ```js
    ...
    "extends": [
        "@leeruniek/eslint-config/rules/frontend",
        "@leeruniek/eslint-config/rules/jest",
    ],
    ...
    ```
- rules in [`@leeruniek/eslint-config/rules/jest`](https://github.com/leeruniek/eslint-config/blob/master/rules/jest.js)

### [no-inferred-method-name](https://www.npmjs.org/package/eslint-plugin-no-inferred-method-name)

In ES6, compact methods and unnamed function expression assignments within object literals do not create a lexical identification (name) binding that corresponds to the function name identifier for recursion or event binding. The compact method syntax will not be an appropriate option for these types of solutions, and a named function expression should be used instead.
This custom ESLint rule will identify instances where a function name is being called and a lexical identifier is unavailable within a compact object literal.

- loaded in [`frontend`](https://github.com/leeruniek/eslint-config/blob/master/rules/frontend.js) & [`backend`](https://github.com/leeruniek/eslint-config/blob/master/rules/backend.js) bundles

## Using with SublimeText

### [SublimeLinter](https://packagecontrol.io/packages/SublimeLinter)

Sublime Text 3 plugin that provides a framework for linting code. Whatever language you code in, SublimeLinter can help you write cleaner, better, more bug-free code. SublimeLinter has been designed to provide maximum flexibility and usability for users and maximum simplicity for linter authors.

### [Sublime​Linter-contrib-eslint](https://packagecontrol.io/packages/SublimeLinter-contrib-eslint)

Sublime Text 3 plugin for SublimeLinter that provides an interface to ESLint. It will be used with files that have the "javascript" syntax.

**:godmode: TIP 1:** Use [`SublimeLinter-contrib-eslint_d`](https://github.com/roadhump/SublimeLinter-contrib-eslint_d) for "as you type lightning fast" linting.

**:godmode: TIP 1.1:** In order to make `eslint-plugin-import` and `.eslintignore` work you need to add `chdir` to your `*.sublime-project` file:

```json
{
    "SublimeLinter": {
        "linters": {
            "eslint_d": {
                "chdir": "${project}"
            }
        }
    }
}
```

Read more here: [fix Sublime integration without workaround](https://github.com/benmosher/eslint-plugin-import/issues/146) and [Relative stdin-filename breaks my plugin](https://github.com/roadhump/SublimeLinter-eslint/issues/58)

### [Fuzzy​File​Path](https://packagecontrol.io/packages/FuzzyFilePath)

Fuzzy search and insert filenames inside your current project directory. Highly customizable.

<details>
<summary>Example config for ES6 import (see plugin default settings for more)</summary>

```javascript
...
"scopes": [
    {
        // JS - ES6 import from/import "*"
        "scope"         : "\\.js\\s",
        "prefix"        : [ "from", "import" ],
        "extensions"    : [ "js", "jsx", "sass", "scss", "less", "css" ],

        "auto"          : true,
        "relative"      : false,
        "base_directory": false,

        "replace_on_insert": [
            // Remove extensions from path
            [ "\\.js$", "" ],
            [ "\\.jsx$", "" ],
            [ "\\.json$", "" ],

            // Remove base path and setup Webpack to resolve
            [ "\\/source/", "" ],
            [ "\\/assets/", "" ]
        ],
    }, {
        // CSS - import ""
        "scope"         : "source\\.(css|sass|less)",
        "prefix"        : [ "import" ],
        "extensions"    : [ "css", "scss", "less" ],

        "auto"             : true,
        "relative"         : true,
        "base_directory"   : false,
        "replace_on_insert": [],
    }, {
        // CSS - *: url()
        "scope"         : "source\\.(css|sass|less)",
        "prefix"        : [ "url" ],
        "extensions"    : [ "png", "gif", "jpeg", "jpg", "woff", "ttf", "svg", "otf" ],

        "auto"             : true,
        "relative"         : true,
        "base_directory"   : false,
        "replace_on_insert": [],
    },
]
...
```

</details>

## Formatting your code using ESLint rules

### [ESLint-Formatter](https://packagecontrol.io/packages/ESLint-Formatter)

Plugin to auto-format your javascript code according to the ESLint configuration files you already have.

While using the plugin with `eslint` you will notice a delay when formatting. This is because of the node startup time on each lint. You [can configure it](https://github.com/TheSavior/ESLint-Formatter#performance) to use [`eslint_d`](https://github.com/mantoni/eslint_d.js) which starts a server in the background and interfaces `eslint`, making the formatting almost instant.

### [eslint-watch](https://www.npmjs.org/package/eslint-watch)

You can autofix you files without any editor plugin by running [`eslint --fix`](http://eslint.org/docs/user-guide/command-line-interface#--fix) on files as they change. You will need to install [`eslint-watch`](https://github.com/rizowski/eslint-watch), which interfaces whatever `eslint` you have in your project.

- `npm install eslint-watch --save-dev`
- add a script to `package.json`:  
    `"lint:watch": "esw --format simple-success --fix --watch --changed --ext .js,.jsx SOURCE_DIR"`
- run in terminal: `npm run lint:watch`

## Example of `.eslintrc.js`

Using [`babel-eslint`](https://github.com/babel/babel-eslint) and [`eslint-import-resolver-webpack`](https://www.npmjs.com/package/eslint-import-resolver-webpack)

```javascript
/* eslint-env node */

module.exports = {
    root  : true,
    parser: "babel-eslint",

    extends: [ "@leeruniek/eslint-config/rules/frontend" ],

    settings: {
        // Use webpack to resolve modules in imports
        "import/resolver": {
            webpack: {
                config: "./webpack.config.js",
            },
        },

        // Recommended if you use eslint_d
        "import/cache": {
            lifetime: 5,
        },

        // A list of regex strings that, if matched by a path, will not report
        // the matching module if no exports are found.
        "import/ignore": [ "\.(sass|scss|less|css)$" ],
    },

    // Add your custom rules here
    rules: {
        // Don"t require .jsx extension when importing
        "import/extensions": [
            "error", "always", {
                js : "never",
                jsx: "never",
            },
        ],
    },
}
```

## Reading

- [Detect Problems in JavaScript Automatically with ESLint](https://davidwalsh.name/eslint)
- [Elements of JavaScript Style](https://medium.com/javascript-scene/elements-of-javascript-style-caa8821cb99f) - while not related to ESLint, it set's you on the path of structuring and organizing yourself better.
- [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) - Common mistakes using promises.
- [Stack Overflow: What's the difference between dependencies, devDependencies and peerDependencies in npm package.json file?](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies)
- [An Open Letter to JavaScript Leaders Regarding Semicolons](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding)
- [Configuring ESLint](http://eslint.org/docs/user-guide/configuring)
- [ES6 Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## Changelog

History of all changes in [CHANGELOG.md](https://github.com/leeruniek/eslint-config/blob/master/CHANGELOG.md)

## 2.7.2 - 18 August 2017

Removed Flow from both bundles, need to be loaded separately.

### Added

- React [`boolean-prop-naming`](https://github.com/leeruniek/eslint-config/blob/master/rules/react.js#L85), [`no-typos`](https://github.com/leeruniek/eslint-config/blob/master/rules/react.js#L93) and [`jsx-boolean-value`](https://github.com/leeruniek/eslint-config/blob/master/rules/react.js#L40)

### Changed

- Removed [`flow`](https://github.com/leeruniek/eslint-config/blob/master/rules/flow.js) from both bundles. Need to include it [separately](https://github.com/leeruniek/eslint-config#flowtype--flowtype-errors)
