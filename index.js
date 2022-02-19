const path = require('path');
const packageInfo = require('./package.json');
const {version} = packageInfo;

module.exports = {
  path: path.join(__dirname, 'lib', `selenium-server-${version}.jar`)
}