/*
Reliably test if a number is odd or not.
Returns false or true for intelligable numbers
Returns console log and false else
*/
function isOdd (number) {
  // Check input before recurrsion
  if (number === 1) {
    return true
  }
  number = ~~number // bitwise flip to convert to$
  if (number == 0) {
    console.log('Improper input')
    return false
  }
  if (number < 0) {
    return isOdd(-number)
  }
  function recurse (number) {
    if (number === 0) {
      return false
    }
    if (number === 1) {
      return true
    } else {
      return recurse(number - 2)
    }
  }
  return recurse(number)
}
console.log('3 is odd: ' + isOdd(3))
console.log('8 is odd: ' + isOdd(8))
