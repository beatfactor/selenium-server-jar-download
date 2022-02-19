# selenium-server-jar-download
NPM install wrapper which makes available the selenium standalone server jar file in your node_modules folder.

[![Build Status][build-badge]][build]
[![version][version-badge]][package]

# Installing
This will download the jar file. 

```sh
npm i @nightwatch/selenium-server
```

Install a specific version, e.g. `4.1.1`:
```sh
npm i @nightwatch/selenium-server@4.1.1
```

# Usage

```js
const SeleniumServer = require('@nightwatch/selenium-server');

// Get the path to the jar file:
console.log(SeleniumServer.path);
```

# License
MIT

[build-badge]: https://github.com/beatfactor/selenium-server-jar-download/actions/workflows/node.js.yml/badge.svg?branch=main
[build]: https://github.com/beatfactor/selenium-server-jar-download/actions/workflows/node.js.yml
[version-badge]: https://img.shields.io/npm/v/@nightwatch/selenium-server.svg?style=flat-square
[package]: https://www.npmjs.com/package/@nightwatch/selenium-server
