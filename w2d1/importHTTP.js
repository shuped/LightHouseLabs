const httpFUN = require('./getHTMLWithCallback.js')

httpFUN('sytantris.github.io', '/http-examples/step2.html', function printHTML (html) {
  console.log(html)
})
