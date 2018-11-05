/*
## The challenge:

  Create a file named revising-strings.js.

  Define a variable named pizza that references
  this string: 'pizza is alright'

  Use the .replace() method to change alright to
  wonderful.

  Use console.log() to print the results of the
  .replace() method to the terminal.

  Check to see if your program is correct by
  running this command:

  javascripting verify revising-strings.js
*/
let string = 'pizza is alright'
let words = string.split(' ')

let zah = words[0]

var newString = string.replace(/alright/, 'wonderful').trim()
console.log(newString)