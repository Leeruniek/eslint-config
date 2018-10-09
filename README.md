<!-- markdownlint-disable line-length -->

# JavaScript ESLint rules

[![npm package version](https://badge.fury.io/js/%40leeruniek%2Feslint-config.svg)](https://badge.fury.io/js/%40leeruniek%2Feslint-config)
[![dev-badge](https://david-dm.org/leeruniek/eslint-config/dev-status.svg)](https://david-dm.org/leeruniek/eslint-config?type=dev)
[![peer-badge](https://david-dm.org/leeruniek/eslint-config/peer-status.svg)](https://david-dm.org/leeruniek/eslint-config?type=peer)

> JavaScript ESLint bundle with best practices and common use rules for writing more consistent code.
>
> [`"semi": [ "error", "never" ]`](http://eslint.org/docs/rules/semi) :godmode: ... [the horror](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding) :goberserk:

Other bundles: [XO](https://www.npmjs.com/package/xo), [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb), [eslint-config-google](https://github.com/google/eslint-config-google), [more](https://www.npmjs.com/search?q=+eslint-config-)

---

<!-- MarkdownTOC levels="1,2,3" autolink="true" indent="    " -->

- [Install](#install)
- [Use](#use)
- [ESLint plugins](#eslint-plugins)
    - [import](#import)
    - [json](#json)
    - [promise](#promise)
    - [unicorn](#unicorn)
    - [flowtype & flowtype-errors](#flowtype--flowtype-errors)
    - [html](#html)
    - [react](#react)
    - [jsx-control-statements](#jsx-control-statements)
    - [compat](#compat)
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
- [3.0.0 - 8 October 2018](#300---8-october-2018)
    - [Added](#added)
    - [Changed](#changed)

<!-- /MarkdownTOC -->

## Install

```bash
npm i eslint @leeruniek/eslint-config --save-dev
```

Run `npm info "@leeruniek/eslint-config@latest" peerDependencies` to get the packages needed in your own `package.json`.

It should be something like this:

```javascript
...
"devDependencies": {
    "eslint": "^5.6.1",
    "eslint-config-prettier": "^3.1.0",
    "eslint-plugin-import": "^2.14.0",
    "eslint-plugin-json": "^1.2.1",
    "eslint-plugin-no-inferred-method-name": "^1.0.2",
    "eslint-plugin-promise": "^4.0.1",
    "eslint-plugin-prettier": "^3.0.0",
    "eslint-plugin-unicorn": "^6.0.1",
    "prettier": "^1.14.3"
}
...
```

## Use

Add the `react` or `node` target file in your `.eslintrc` file:

```javascript
{
    "extends": [
        // use for Node.js projects
        "@leeruniek/eslint-config/targets/node",

        // use for React projects
        "@leeruniek/eslint-config/targets/react",

        // optional Flow support
        "@leeruniek/eslint-config/rules/flow",
    ]
}
```

When using `react` target, besides the peer dependencies, also install `eslint-plugin-jsx-control-statements`

```bash
npm install --save-dev eslint-plugin-jsx-control-statements
```

When using with flow, Install `eslint-plugin-flowtype` and `eslint-plugin-flowtype-errors`.

```bash
npm install --save-dev eslint-plugin-flowtype eslint-plugin-flowtype-errors
```

Besides `.eslintrc`, [prettier](https://prettier.io) also needs configuring. Here's a recommended `.prettierrc` config:

```json
{
  "semi": false,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": false,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "jsxBracketSameLine": true,
  "arrowParens": "avoid"
}
```

## ESLint plugins

### [import](https://www.npmjs.org/package/eslint-plugin-import)

Support for ES2015+ (ES6+) import/export syntax.  

- loaded in [`react`](https://github.com/Leeruniek/eslint-config/blob/master/targets/react) & [`node`](https://github.com/Leeruniek/eslint-config/blob/master/targets/node.js) bundles
- rules in [`@leeruniek/eslint-config/rules/import`](https://github.com/Leeruniek/eslint-config/blob/master/rules/import.js)

### [json](https://www.npmjs.org/package/eslint-plugin-json)

Lint JSON files.

- loaded in [`react`](https://github.com/Leeruniek/eslint-config/blob/master/targets/react) & [`node`](https://github.com/Leeruniek/eslint-config/blob/master/targets/node.js) bundles

### [promise](https://www.npmjs.org/package/eslint-plugin-promise)

Enforce best practices for JavaScript promises.

- loaded in [`react`](https://github.com/Leeruniek/eslint-config/blob/master/targets/react) & [`node`](https://github.com/Leeruniek/eslint-config/blob/master/targets/node.js) bundles
- rules in [`@leeruniek/eslint-config/rules/promise`](https://github.com/Leeruniek/eslint-config/blob/master/rules/promise.js)

### [unicorn](https://www.npmjs.org/package/eslint-plugin-unicorn)

Various awesome ESLint rules.

- loaded in [`react`](https://github.com/Leeruniek/eslint-config/blob/master/targets/react) & [`node`](https://github.com/Leeruniek/eslint-config/blob/master/targets/node.js) bundles
- rules in [`@leeruniek/eslint-config/rules/unicorn`](https://github.com/Leeruniek/eslint-config/blob/master/rules/unicorn.js)

### [flowtype](https://www.npmjs.org/package/eslint-plugin-flowtype) & [flowtype-errors](https://www.npmjs.org/package/eslint-plugin-flowtype-errors)

- *flowtype*: [Flow](https://flow.org) specific linting rules.
- *flowtype-errors*: Runs your code through Flow and passes the type check errors as linting errors. Any editor that has ESLint support now supports Flow.

- rules in [`@leeruniek/eslint-config/rules/flow`](https://github.com/Leeruniek/eslint-config/blob/master/rules/flow.js)

### [html](https://www.npmjs.org/package/eslint-plugin-html)

Allows linting and fixing inline scripts contained in HTML files.

- not in peerDependencies: `npm install --save-dev eslint-plugin-html`
- loaded in [`react`](https://github.com/Leeruniek/eslint-config/blob/master/targets/react) bundle
- rules in [`@leeruniek/eslint-config/rules/html`](https://github.com/Leeruniek/eslint-config/blob/master/rules/html.js)

### [react](https://www.npmjs.org/package/eslint-plugin-react)

React specific linting rules.

- not in peerDependencies: `npm install --save-dev eslint-plugin-react`
- loaded in [`react`](https://github.com/Leeruniek/eslint-config/blob/master/targets/react) bundle
- rules in [`@leeruniek/eslint-config/rules/react`](https://github.com/Leeruniek/eslint-config/blob/master/rules/react.js)

### [jsx-control-statements](https://github.com/vkbansal/eslint-plugin-jsx-control-statements)

ESLint rules for [JSX-Control-Statements](https://github.com/AlexGilleran/jsx-control-statements) babel plugin (Neater If and For for React JSX).

- not in peerDependencies: `npm install --save-dev eslint-plugin-jsx-control-statements`
- loaded in [`react`](https://github.com/Leeruniek/eslint-config/blob/master/targets/react) bundle
- rules in [`@leeruniek/eslint-config/rules/react`](https://github.com/Leeruniek/eslint-config/blob/master/rules/react.js#L104)

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
- loaded in [`react`](https://github.com/Leeruniek/eslint-config/blob/master/targets/react) bundle
- rules in [`@leeruniek/eslint-config/rules/compat`](https://github.com/Leeruniek/eslint-config/blob/master/rules/compat.js)

### [no-inferred-method-name](https://www.npmjs.org/package/eslint-plugin-no-inferred-method-name)

In ES6, compact methods and unnamed function expression assignments within object literals do not create a lexical identification (name) binding that corresponds to the function name identifier for recursion or event binding. The compact method syntax will not be an appropriate option for these types of solutions, and a named function expression should be used instead.
This custom ESLint rule will identify instances where a function name is being called and a lexical identifier is unavailable within a compact object literal.

- loaded in [`react`](https://github.com/Leeruniek/eslint-config/blob/master/targets/react) & [`node`](https://github.com/Leeruniek/eslint-config/blob/master/targets/node.js) bundles

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

    extends: [ "@leeruniek/eslint-config/targets/react" ],

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

## 3.0.0 - 8 October 2018

Restructuring bundles as "target" files. Supporting React and Node.js, with optional Flow support.

Delegating all stylistic rules to [`prettier`](https://prettier.io) via [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) and [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier).

### Added

- unicorn: [`unicorn/no-process-exit`](https://github.com/Leeruniek/eslint-config/blob/master/rules/unicorn.js#L12), [`unicorn/number-literal-case`](https://github.com/Leeruniek/eslint-config/blob/master/rules/unicorn.js#L20), [`unicorn/no-fn-reference-in-iterator`](https://github.com/Leeruniek/eslint-config/blob/master/rules/unicorn.js#L23), [`unicorn/import-index`](https://github.com/Leeruniek/eslint-config/blob/master/rules/unicorn.js#L29), [`unicorn/prefer-spread`](https://github.com/Leeruniek/eslint-config/blob/master/rules/unicorn.js#L36), [`unicorn/prefer-add-event-listener`](https://github.com/Leeruniek/eslint-config/blob/master/rules/unicorn.js#L45), [`unicorn/prefer-exponentiation-operator`](https://github.com/Leeruniek/eslint-config/blob/master/rules/unicorn.js#L48)
- react: [`react/void-dom-elements-no-children`](https://github.com/Leeruniek/eslint-config/blob/master/rules/react.js#L12), [`react/prefer-es6-class`](https://github.com/Leeruniek/eslint-config/blob/master/rules/react.js#L15), [`react/no-unused-prop-types`](https://github.com/Leeruniek/eslint-config/blob/master/rules/react.js#L18), [`react/no-unused-state`](https://github.com/Leeruniek/eslint-config/blob/master/rules/react.js#L21), [`react/no-unsafe`](https://github.com/Leeruniek/eslint-config/blob/master/rules/react.js#L24), [`react/no-will-update-set-state`](https://github.com/Leeruniek/eslint-config/blob/master/rules/react.js#L27), [`react/forbid-dom-props`](https://github.com/Leeruniek/eslint-config/blob/master/rules/react.js#L30), [`react/forbid-prop-types`](https://github.com/Leeruniek/eslint-config/blob/master/rules/react.js#L32), [`react/jsx-filename-extension`](https://github.com/Leeruniek/eslint-config/blob/master/rules/react.js#L40), [`react/jsx-max-depth`](https://github.com/Leeruniek/eslint-config/blob/master/rules/react.js#L43)
- flowtype-errors: [`flowtype-errors/type-import-style`](https://github.com/Leeruniek/eslint-config/blob/master/rules/flow.js#L34), [`flowtype-errors/require-types-at-top`](https://github.com/Leeruniek/eslint-config/blob/master/rules/flow.js#L40), [`flowtype-errors/no-unused-expressions`](https://github.com/Leeruniek/eslint-config/blob/master/rules/flow.js#L47), [`flowtype-errors/array-style-complex-type`](https://github.com/Leeruniek/eslint-config/blob/master/rules/flow.js#L50), [`flowtype-errors/array-style-simple-type`](https://github.com/Leeruniek/eslint-config/blob/master/rules/flow.js#L53)

### Changed

- [`jsx-control-statements/jsx-use-if-tag`](https://github.com/Leeruniek/eslint-config/blob/master/rules/react.js#L339) from "error" -> "warn"
- [`react/sort-comp`](https://github.com/Leeruniek/eslint-config/blob/master/rules/react.js#L247) added `getDerivedStateFromProps` and `componentDidCatch`
- [`flowtype/require-return-type`](https://github.com/Leeruniek/eslint-config/blob/master/rules/flow.js#L) from "off" -> "error"
