/*
Reliably test if a number is even or not.
Returns false or true for intelligable numbers
Returns console log and false else
*/
function recurseEven (number) {
  // Check input before recurrsion
  if (number === 0) {
    return true
  }
  number = ~~number // bitwise flip to convert to int OR 0
  if (number == 0) {
    console.log('Improper input')
    return false
  }
  if (number < 0) {
    return recurseEven(-number)
  }
  function recurse (number) {
    if (number === 1) {
      return false
    }
    if (number === 0) {
      return true
    } else {
      return recurse(number - 2)
    }
  }
  return recurse(number)
}
console.log(recurseEven(-2))
console.log(recurseEven(41))
console.log(recurseEven(Infinity))
console.log(recurseEven(-1))
console.log(recurseEven('bread'))
console.log(recurseEven(NaN))
console.log(recurseEven(undefined))
console.log(recurseEven(''))
console.log(recurseEven({}))
