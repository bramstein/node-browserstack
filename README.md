## BrowserStack Node.js API client

This is a simple Node.js wrapper around the BrowserStack API. It supports the latest version of the API and lets you create both live workers and screenshot workers.

To create live test instances simply create a test client instance and use one of the available methods to manipulate workers:

    var browserStack = require('node-browserstack');

    var testClient = browserStack.createTestClient('username', 'password');

    testClient.getBrowsers(function (err, browsers) {
    });

    testClient.createWorker(options, function (err, identifier) {
    });

    testClient.stopWorker(identifier, function (err) {
    });

    testClient.getWorker(identifier, function (err, worker) {
    });

    testClient.getWorkers(function (err, workers) {
    });

It is equally easy to create screenshot workers:

    var screenshotClient = browserStack.createScreenshotClient('username', 'password');

    screenshotClient.getBrowsers(function (err, browsers) {
    });

    screenshotClient.createWorker(options, function (err, identifier) {
    });

    screenshotClient.getWorker(identifier, function (err, worker) {
    });

The BrowserStack Screenshot API is more limited so only the methods listed above are available.

## License

This project is licensed under the three-clause BSD license.
