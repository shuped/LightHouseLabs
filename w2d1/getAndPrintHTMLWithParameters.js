const https = require('https')

function getAndPrintHTML (host, path = '/') {
  var requestOptions = {
    host,
    path
  }

  https.get(requestOptions, function (response) {
    // set encoding of received data to UTF-8
    response.setEncoding('utf8')

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      let dataString = ''
      console.log('Chunk Received. Length:', data.length)
      dataString += data
      console.log(dataString)
    })

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function () {
      console.log('Response stream complete.')
    })
  })
}

getAndPrintHTML('sytantris.github.io', '/http-examples/step2.html')
