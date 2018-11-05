const https = require('https')

module.exports = function getAndPrintHTML (host, path, callback) {
  var requestOptions = {
    host,
    path
  }

  https.get(requestOptions, function (response) {
    // set encoding of received data to UTF-8
    response.setEncoding('utf8')

    // the callback is invoked when a `data` chunk is received
    response.on('data', callback)

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function () {
      console.log('Response stream complete.')
    })
  })
}
