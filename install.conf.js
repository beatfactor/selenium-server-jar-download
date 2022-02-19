const packageInfo = require('./package.json');
const BASE_URL = 'https://github.com/SeleniumHQ/selenium/releases/download';
const {version, selenium = {}} = packageInfo;
const {folder = '4.1.0', filename} = selenium;

module.exports = {
  downloadUrl: `${BASE_URL}/selenium-${folder}/${filename}-${version}.jar`
}