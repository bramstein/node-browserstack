var TestClient = require('./testclient'),
    ScreenshotClient = require('./screenshotclient');

module.exports = {
  createTestClient: function (username, password) {
    return new TestClient(username, password);
  },
  createScreenshotClient: function (username, password) {
    return new ScreenshotClient(username, password);
  }
};
