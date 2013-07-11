var request = require('request'),
    url = require('url-template'),
    parseResponse = require('./parseResponse');

function ScreenshotClient(username, password) {
  this.request = request.defaults({
    auth: {
      username: username,
      password: password
    }
  });
}

ScreenshotClient.API_URL = 'http://www.browserstack.com/screenshots/';
ScreenshotClient.API_SCREENSHOTS_URL = url.parse(ScreenshotClient.API_URL + '{jobid}.json');
ScreenshotClient.API_BROWSERS_URL = ScreenshotClient.API_URL + 'browsers.json';

ScreenshotClient.prototype.createWorker = function (options, callback) {
  this.request.post({
    url: ScreenshotClient.API_URL,
    body: JSON.stringify(options),
    headers: {
      'Content-Type': 'application/json'
    }
  }, parseResponse(callback));
};

ScreenshotClient.prototype.getWorker = function (identifier, callback) {
  this.request.get({
    url: ScreenshotClient.API_SCREENSHOTS_URL.expand({
      jobid: identifier
    })
  }, parseResponse(callback));
};

ScreenshotClient.prototype.getBrowsers = function (callback) {
  this.request.get({
    url: ScreenshotClient.API_BROWSERS_URL
  }, parseResponse(callback));
};

module.exports = ScreenshotClient;