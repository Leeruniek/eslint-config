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
- [Inside](#inside)
- [Example of `.eslintrc`](#example-of-eslintrc)
- [Changelog](#changelog)
- [3.0.2 - 19 November 2018](#302---19-november-2018)
    - [Change](#change)

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
    "eslint": "^5.9.0",
    "eslint-config-prettier": "^3.3.0",
    "eslint-plugin-import": "^2.14.0",
    "eslint-plugin-json": "^1.2.1",
    "eslint-plugin-no-inferred-method-name": "^1.0.2",
    "eslint-plugin-promise": "^4.0.1",
    "eslint-plugin-prettier": "^3.0.0",
    "eslint-plugin-unicorn": "^6.0.1",
    "prettier": "^1.15.2"
}
...
```

## Use

Add the `react` or `node` target file in your `.eslintrc` file:

```javascript
{
    "extends": [
        // Node.js projects
        "@leeruniek/eslint-config/targets/node",

        // React projects
        "@leeruniek/eslint-config/targets/react",

        // optional Flow support
        "@leeruniek/eslint-config/rules/flow"
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

## Inside

- [eslint-plugin-import](https://www.npmjs.org/package/eslint-plugin-import) - Support for ES2015+ (ES6+) import/export syntax
- [eslint-plugin-promise](https://www.npmjs.org/package/eslint-plugin-promise) - Enforce best practices for JavaScript promises
- [eslint-plugin-unicorn](https://www.npmjs.org/package/eslint-plugin-unicorn) - Various awesome ESLint rules
- [eslint-plugin-flowtype](https://www.npmjs.org/package/eslint-plugin-flowtype) - [Flow](https://flow.org) specific linting rules
- [eslint-plugin-flowtype-errors](https://www.npmjs.org/package/eslint-plugin-flowtype-errors) - Runs your code through Flow and passes the type check errors as linting errors. Any editor that has ESLint support now supports Flow
- [eslint-plugin-html](https://www.npmjs.org/package/eslint-plugin-html) - Allows linting and fixing inline scripts contained in HTML files
- [eslint-plugin-react](https://www.npmjs.org/package/eslint-plugin-react) - React specific linting rules
- [eslint-plugin-jsx-control-statements](https://github.com/vkbansal/eslint-plugin-jsx-control-statements) - ESLint rules for [JSX-Control-Statements](https://github.com/AlexGilleran/jsx-control-statements) babel plugin (If and For pseudo components)
- [eslint-plugin-compat](https://www.npmjs.org/package/eslint-plugin-compat) - Lint the browser compatibility of your code (using [caniuse](http://caniuse.com/)). Uses `browserslist` definition in your `package.json`.
- [eslint-plugin-no-inferred-method-name](https://www.npmjs.org/package/eslint-plugin-no-inferred-method-name) - In ES6, compact methods and unnamed function expression assignments within object literals do not create a lexical identification (name) binding that corresponds to the function name identifier for recursion or event binding. The compact method syntax will not be an appropriate option for these types of solutions, and a named function expression should be used instead. This custom ESLint rule will identify instances where a function name is being called and a lexical identifier is unavailable within a compact object literal.

## Example of `.eslintrc`

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

## Changelog

History of all changes in [CHANGELOG.md](/CHANGELOG.md)

## 3.0.2 - 19 November 2018

### Change

- Fix flow rules assing to `flowtype-errors` instead of `flowtype`
