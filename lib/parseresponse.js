function parseResponse(callback) {
  return function (err, res, body) {
    if (err) {
      callback(err, null);
    } else if (res.statusCode !== 200 && res.statusCode !== 201) {
      callback({
        statusCode: res.statusCode,
        body: JSON.parse(body.toString())
      }, null);
    } else {
      callback(null, JSON.parse(body.toString()));
    }
  };
}

module.exports = parseResponse;
