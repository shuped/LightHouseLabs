/* Lighthouse Labs Web-Dev
Prep Module 6: Multiplication Table

Task
You'll be given a number, this is the highest value of your multiplication table.
Your job is to generate a multiplication table for the values from 1 to the provided
value.

Each cell should have the same size, as well as at least 1 space of padding around
each value.

Your function should be called multiplicationTable and it should return a string for
the multiplication table output. Do not use console.log inside the function.
*/

var multiplicationTable = function (maxValue) {
  let spaces = calculateSpaces(maxValue)
  let table = ''
  for (let multiple = 1; multiple <= maxValue; multiple++) {
    let border = createBorder(maxValue, spaces)
    table += border + '\n'
    let row = createRow(multiple, maxValue, spaces)
    table += row + '\n'
  }
  let tailingBorder = createBorder(maxValue, spaces)
  table += tailingBorder
  return table
}

var createBorder = (length, spaces) => {
  let border = '+'
  let borderString = ''
  // create appropriately sized border string
  for (var i = 0; i < spaces; i++) {
    borderString += '-'
  }
  borderString += '+'
  // append as many as table size needs
  for (let i = 0; i < length; i++) {
    border += borderString
  }
  return border
}

var createRow = (multiple, maxValue, spaces) => {
  // loops to create and append each cell, by padding the calls value with spaces
  let row = '|'
  for (let n = 1; n <= maxValue; n++) {
    let product = multiple * n
    let paddedProduct = padProduct(product, spaces)
    row += `${paddedProduct}|`
  }
  return row
}

var calculateSpaces = (maxValue) => {
  // space needed for each cell, given the longest number in table
  let largestValueInTable = maxValue ** 2
  let spaces = largestValueInTable.toString().length
  return spaces + 2
}

var padProduct = (product, spaces) => {
  // combines padStart and padEnd to get 'spaces' lengthed string
  let stringProduct = product.toString()
  let length = stringProduct.length
  let frontPad = Math.floor((spaces - length) / 2) + length
  let backPad = spaces
  return stringProduct.padStart(frontPad).padEnd(backPad)
}

console.log(multiplicationTable(1))
console.log(multiplicationTable(5))
console.log(multiplicationTable(10))
// Expected Output
// +---+
// | 1 |
// +---+

// +----+----+----+----+----+
// | 1  | 2  | 3  | 4  | 5  |
// +----+----+----+----+----+
// | 2  | 4  | 6  | 8  | 10 |
// +----+----+----+----+----+
// | 3  | 6  | 9  | 12 | 15 |
// +----+----+----+----+----+
// | 4  | 8  | 12 | 16 | 20 |
// +----+----+----+----+----+
// | 5  | 10 | 15 | 20 | 25 |
// +----+----+----+----+----+
