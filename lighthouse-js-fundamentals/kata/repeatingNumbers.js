/* Lighthouse Labs Web-Dev
Prep Module 6: Repeating Numbers
Task
You'll be given a two dimensional array (an array of arrays), each sub-array will
only have two values. The first will be the value to repeat, the second will be
the amount of times to repeat that value.

Your function repeatNumbers should return a string with each of the given values
repeated the appropriate number of times, each set of values separated by a comma.
If there is only one set of values then you should omit the comma.
*/

var repeatNumbers = function (data) {
  let result = []
  // parse 2D data array
  for (let set of data) {
    let stringToRepeat = set[0]
    let length = set[1]
    let repeatedString = ''
    // repeat over each set
    for (let i = 0; i < length; i++) {
      repeatedString += stringToRepeat
    }
    result.push(repeatedString)
  }
  // join with ,
  return result.join(', ')
}

console.log(repeatNumbers([[1, 10]]))
console.log(repeatNumbers([[1, 2], [2, 3]]))
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]))

// Expected output
// 1111111111
// 11, 222
// 10101010, 343434343434, 9292
