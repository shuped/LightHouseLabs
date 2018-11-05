function entryAndExit (priceArray) {
  var entry = priceArray[0]
  var exit = priceArray[0]
  var possibleEntry = priceArray[0]

  var lookForNewExit = function upwardTrendBehavior (start = 0) {
    for (let i = start; i < priceArray.length; i++) {
      if (priceArray[i] > exit) {         //current is greater than exit
        exit = priceArray[i];             // set new exit
      } else                              // else if current is less than entry
      if (priceArray[i] < entry) {
        possibleEntry = priceArray[i];    // set possibleEntry
        lookForNewEntry(start = i);       // start lookforentry at current index
      }
    }
  }
  var lookForNewEntry = function downwardTrendBehavior (start = 0) {
    var currentProfit = exit - entry;
    for (let i = start; i < priceArray.length; i++) {
      if (priceArray[i] < possibleEntry) { // if current is less than possibleEntry
        possibleEntry = priceArray[i];    // set possibleEntry
      } else                              // else if current - possibleEntry > currentProfit
      if (priceArray[i] - possibleEntry > currentProfit) { // set entry = possibleEntry
        entry = possibleEntry;
        exit = priceArray[i];              // set exit = current
        lookForNewExit(start = i);            // start lookForExit at curent
      }
    }
  }
  lookForNewExit()
  return [entry, exit]
}

module.exports = {
  entryAndExit: entryAndExit
}


console.log(entryAndExit([21,61,25,67,87,20,11,40,100,1,30]))
