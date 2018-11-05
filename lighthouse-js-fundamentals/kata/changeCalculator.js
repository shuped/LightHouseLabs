/* Lighthouse Labs Web-Dev
Prep Module 6: Change Calculator
Task
You'll be given two numbers, the total of a transaction, and the amount of cash
given to the cashier. Both of these numbers will be represented as whole numbers
in cents. Therefore $10 will be represented as 1000.

Your function calculateChange should return an object which describes the total
amount of change for the cashier to give back. Omit any types of change that you
shouldn't give back, i.e. if you don't give back a twenty dollar bill, don't
include it in the results.

N.B. Although pennies are not used in circulation, still calculate the amount of pennies to give back.

20 dollars --> 1 penny
*/

var calculateChange = function (total, cash) {
  let change = cash - total
  let changeObj = {}
  let changeTypes = {
    'twentyDollar': 2000,
    'tenDollar': 1000,
    'fiveDollar': 500,
    'twoDollar': 200,
    'oneDollar': 100,
    'quarter': 25,
    'dime': 10,
    'nickle': 5,
    'penny': 1
  }
  if (change <= 0) { return {} }
  for (var denomination in changeTypes) {
    let value = changeTypes[denomination]
    if (change - value >= 0) {
      changeObj[denomination] = Math.floor(change / value)
      change -= Math.floor(change / value) * value
    }
  }
  return changeObj
}

console.log(calculateChange(1787, 2000))
console.log(calculateChange(2623, 4000))
console.log(calculateChange(1000, 1000))
// Expected Output
// { twoDollar: 1, dime: 1, penny: 3 }
// { ten: 1, twoDollar: 1, dollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
