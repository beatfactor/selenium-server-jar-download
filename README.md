# selenium-server-jar-download
NPM install wrapper which makes available the selenium standalone server jar file in your node_modules folder.

## Installing Selenium 4
This will download the jar file. 

```sh
npm i @nightwatch/selenium-server
```

Install a specific version, e.g. `4.1.1`:
```sh
npm i @nightwatch/selenium-server@4.1.1
```

### Installing Selenium 3
This will install the last Selenium 3 version: `3.150.0`

```sh
npm i @nightwatch/selenium-server@3
```

# Usage

```js
const SeleniumServer = require('@nightwatch/selenium-server');

// Get the path to the jar file:
console.log(SeleniumServer.path);
```

# License
MIT
