function entryAndExit (priceArray) {
  var entry = priceArray[0]
  var exit = priceArray[1]
  var possibleEntry
  var priceDifference = []
  for (let i = 0; i < priceArray.length - 1; i++) {
    priceDifference.push(priceArray[i + 1] - priceArray[i])
  }
  return [entry, exit]
}

module.exports = {
  entryAndExit: entryAndExit
}




// if (price < entry) {
//   possibleEntry = price
//   //entry = price
// } else if (price > exit) {
//     if (exit - possibleEntry)  exit = price
// }
console.log(entryAndExit([21,61,43,25,47,67,87,48,39,44,68,11,40,100,1,30]))