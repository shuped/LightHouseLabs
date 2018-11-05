/* Lighthouse Labs Web-Dev
Prep Module 9: Square Code

One classic method for composing secret messages is called a square code.
The spaces are removed from the english text and the characters are written
into a square (or rectangle). For example, the sentence "If man was meant
to stay on the ground god would have given us roots" is 54 characters long,
so it is written into a rectangle with 7 rows and 8 columns.
ifmanwas
meanttos
tayonthe
groundgo
dwouldha
vegivenu
sroots
The message is then coded by reading down the columns going left to right.
For example, the message above is coded as:
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn  sseoau
In your program, have the user enter a message in english with no spaces
between the words. Have the maximum message length be 81 characters. Display
the encoded message. (Watch out that no "garbage" characters are printed.)
*/
const prompt = require('prompt-sync')({ sigint: true })

function calculateNumerOfEncodedSegments(length) {
  let nearestSqrt = Math.round(Math.sqrt(length))
  let segmentsNeeded = Math.ceil(length / nearestSqrt)
  return segmentsNeeded
}

function* cycle(length) {
  // cycles i to length
  while (true) {
    for (let i = 0; i < length; i++) { yield i }
  }
}

function containsSpaces(string) {
  return string.match(/\s/)
}

let cleartextString = prompt('Please enter your string without spaces: ')
while (cleartextString.length > 81 || containsSpaces(cleartextString)) {
  cleartextString = prompt('Maximum length permitted is 81, please re-enter without spaces: ')
}
let numberOfSegments = calculateNumerOfEncodedSegments(cleartextString.length)

// encodedSegments is an array of empty strings,
// each representing a segment of the encoded string
let encodedSegments = []
for (let i = 0; i < numberOfSegments; i++) {
  encodedSegments.push('')
}
// Push each letter to the appropriate segment with cycle() generator
let cycleThroughSegments = cycle(numberOfSegments)
for (let letter of cleartextString) {
  encodedSegments[cycleThroughSegments.next().value] += letter
}

console.log('Encoded string: ' + encodedSegments.join(' '))

