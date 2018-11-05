function entryAndExit (priceArray) {
  var entry = priceArray[0]
  var exit = priceArray[0]
  var possibleEntry = priceArray[0]

  var lookForNewExit = function upwardTrendBehavior (start = 0) {
    for (let i = start; i < priceArray.length; i++) {
      if (priceArray[i] > exit) {         //if current is greater than exit
        exit = priceArray[i];             // set new exit
      } else                              // else if current is less than entry
      if (priceArray[i] < entry) {
        possibleEntry = priceArray[i];    // set possibleEntry
        return lookForNewEntry(start = ++i);       // start lookforentry at current index
      }
    }
  }
  var lookForNewEntry = function downwardTrendBehavior (start = 0) {
    var currentProfit = exit - entry;
    for (let i = start; i < priceArray.length; i++) {
      if (priceArray[i] < possibleEntry) { // if current is less than possibleEntry
        possibleEntry = priceArray[i];    // set possibleEntry
      } else                              // else if current - possibleEntry > currentProfit
      if (priceArray[i] - possibleEntry > currentProfit) { 
        entry = possibleEntry;            // set entry = possibleEntry
        exit = priceArray[i];              // set exit = current
        return lookForNewExit(start = ++i);            // start lookForExit at current
      }
    }
  }
  lookForNewExit()
  return [entry, exit]
}

function someFunc(x1, y1, x2, y2){
  return ((dx, dy) => {
    return Math.sqrt(dx * dx + dy * dy);
  })(x1 - x2, y1 - y2);
}

module.exports = {
  entryAndExit: entryAndExit
}


// 5 2 6 4 1 7 3 
// 5 2 6 4 -- 1 7 3

// 2 4 5 6 -- 1 3 7

// 1 -- 2 4 5 6 -- 3 7
// 1 2 -- 4 5 6 -- 3 7
// 1 2 3 -- 4 5 6 -- 7
// 1 2 3 4 5 6 -- -- 7
// 1 2 3 4 5 6 7

// 5 2 6 4 -- 1 7 3 
// 5 2 | 6 4 || 1 7 | 3
// 5 | 2 || 6 | 4
// [2, 2] || [6, 6]
// [2, 6] || [1, 7] | [3]
// [2, 6] | [1, 7]
// [2]





console.log(entryAndExit([21,20,10,61,25,67,87,20,11,40,100,30]))
