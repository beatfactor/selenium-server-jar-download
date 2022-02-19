const path = require('path');
const packageInfo = require('./package.json');
const {version, selenium} = packageInfo;

module.exports = {
  path: path.join(__dirname, 'lib', `${selenium.filename}-${version}.jar`)
}