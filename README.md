# eslint-plugin-lowercase-naming

[![Build Status](https://travis-ci.com/farzonl/eslint-lowerCase-plugin.svg?branch=master)](https://travis-ci.com/farzonl/eslint-lowerCase-plugin)

enforces properties start with a lowercase letter

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-lowercase-naming`:

```
$ npm install eslint-plugin-lowercase-naming --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-lowercase-naming` globally.

## Usage

Add `lowercase-naming` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "lowercase-naming"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "lowercase-naming/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





