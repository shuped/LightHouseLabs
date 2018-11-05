/* Lighthouse Labs Web-Dev
Prep Module 6: Conditional Sum
Task
For this kata, you'll be adding only the numbers in the array which match the given condition.

You'll be given an array of numbers and a condition, such as odd or even. Given this condition,
add up only the values which match that condition. If no values match the condition, return 0.

Do not use Array.prototype.filter()
*/
var conditionalSum = function (values, condition) {
  let result = []
  // if even
  if (condition === 'even') {
  // for loop, push if mod 2 == 0
    for (let value of values) {
      if (value % 2 === 0) {
        result.push(value)
      }
    }
    return result
  // if odd
  } else if (condition === 'odd') {
    // for loop, push if mod 2 == 1
    for (let value of values) {
      if (value % 2 === 1) {
        result.push(value)
      }
    }
    return result
  } else {
    return new Error('Improper condition. Only even or odd can be supplied.')
  }
}

console.log(conditionalSum([1, 2, 3, 4, 5], 'even'))
console.log(conditionalSum([1, 2, 3, 4, 5], 'odd'))
console.log(conditionalSum([13, 88, 12, 44, 99], 'even'))
console.log(conditionalSum([], 'odd'))
