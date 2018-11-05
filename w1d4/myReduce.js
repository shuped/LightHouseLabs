// Implementation of the Array.prototype.reduce() method, but as a normal function

// Trying to figure out how to implement this without mutating the original array or making a 
// shallow copy. For in and checking hasOwnProperty will skip holes, but can't start at second
// index when accumulator is set to the first element, unless you use the continue keyword
// and add a comprehensive, bullet-proof conditional to each loop.
// Next implementation would be following the ecma spec exactly.

/**
 * Applies callback to array's elements, ignoring holes, creating a single object to return
 *
 * @param array - supplied array to iterate over, applying callback to each element
 *
 * @param callback - function to be applied to each of array's elements. Returned
 *    value assigned to 'accumulator', which is passed into each iteration.
 *    4 parameters:
 *      - accumulator: The accumulator accumulates the callback's return values
 *      - currentValue: The current element to process
 *      - currentIndex (optional): The 0 based index of the current element
 *      - array (optional): The array supplied to myReduce
 *
 * @param initialValue - inital value of 'accumulator' to be passed into callback.
 *    If undefined, array[0] is assigned and callback skips array[0]
 *
 * @return accumulator - value or object that array is 'reducing' to
 */

function myReduce(array, callback, initialValue) {
  // Informative error if array is not an array
  if (!Array.isArray(array)) {
    return new Error(
      "TypeError - myReduce called on type that isn't Array."
    );
  }

  var accumulator = initialValue
  var haveWeSkippedFirstIteration = false;
  for (var index in array) {
    // assign default accumulator
    if (arguments.length < 3 && !haveWeSkippedFirstIteration) {
      accumulator = array[0];
      haveWeSkippedFirstIteration = true;
      continue
    }
    // reduce over assigned indices and skip prototypes
    if (Object.prototype.hasOwnProperty.call(array, index)) {
      accumulator = callback(accumulator, array[index], index, array);
    }
  }

  return accumulator;
}

// tests //
Array.prototype.iDisregardCodingPaterns = () => 1

console.log("Expected Output: 6");
console.log(
  myReduce([1, 2, 3], function(sum, elm) {
    return (sum += elm);
  })
); // 6
console.log("Expected Output: [0, 1, 2, 3, 4, 5]");
console.log(
  myReduce(
    [[0, 1], [2, 3], [4, 5]],
    function(accumulator, currentValue) {
      return accumulator.concat(currentValue);
    },
    []
  )
); // [0,1,2,3,4,5]
console.log("Expected Output: { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }");
var names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
console.log(
  myReduce(
    names,
    function(allNames, name) {
      if (name in allNames) {
        allNames[name]++;
      } else {
        allNames[name] = 1;
      }
      return allNames;
    },
    {}
  )
); // { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }
var holedArray = [1,2,,3]
console.log("Expected Output: 6");
console.log(
  myReduce([1, 2, 3], function(sum, elm) {
    return (sum += elm);
  })
);
console.log("Expected Output: [ 1, 2, , 3 ]")
console.log(holedArray)