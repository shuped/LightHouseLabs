
var getHTML = require('../getHTMLWithCallback')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
}

function printUpperCase (data) {
  let dataString = ''
  dataString += data
  console.log(dataString.toUpperCase())
}

getHTML('sytantris.github.io', '/http-examples/step2.html', printUpperCase)
