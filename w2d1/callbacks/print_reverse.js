var getHTML = require('../getHTMLWithCallback')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
}

function printReverse (data) {
  let dataString = ''
  dataString += data
  let reverseString = [...dataString].reduceRight((str, letter) => (str + letter))
  console.log(reverseString)
}

getHTML('sytantris.github.io', '/http-examples/step2.html', printReverse)
