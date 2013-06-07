var request = require('request'),
    url = require('url-template'),
    parseResponse = require('./parseResponse');

function TestClient(username, password) {
  this.request = request.defaults({
    auth: {
      username: username,
      password: password
    }
  });
}

TestClient.API_URL = 'http://api.browserstack.com/3/';
TestClient.API_WORKER_URL = url.parse(TestClient.API_URL + 'worker/{id}');
TestClient.API_WORKERS_URL = TestClient.API_URL + 'workers/';
TestClient.API_BROWSERS_URL = TestClient.API_URL + 'browsers?flat=true';

TestClient.prototype.createWorker = function (options, callback) {
  this.request.post({
    url: TestClient.API_WORKER_URL.expand({}),
    body: JSON.stringify(options),
    headers: {
      'Content-Type': 'application/json'
    }
  }, parseResponse(function (err, data) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data.id);
    }
  }));
};

TestClient.prototype.stopWorker = function (identifier, callback) {
  this.request.del({
    url: TestClient.API_WORKER_URL.expand({
      id: identifier
    })
  }, parseResponse(callback));
};

TestClient.prototype.getWorker = function (identifier, callback) {
  this.request.get({
    url: TestClient.API_WORKER_URL.expand({
      id: identifier
    })
  }, parseResponse(callback));
};

TestClient.prototype.getWorkers = function (callback) {
  this.request.get({
    url: TestClient.API_WORKERS_URL
  }, parseResponse(callback));
};

TestClient.prototype.getBrowsers = function (callback) {
  this.request.get({
    url: TestClient.API_BROWSERS_URL
  }, parseResponse(callback));
};

module.exports = TestClient;
