/* LightHouse Labs Wed-Dev
Prep Module 4: Loopy Concat Arrays
Define a function concat, which, given two arrays, concatenates the arrays together.

For example:

code	output
concat([ 1, 2, 3 ], [ 4, 5, 6 ]);	[ 1, 2, 3, 4, 5, 6 ]
*/

function merge (array1, array2) {
  var i
  for (i = 0; i < array2.length; i++) {
    array1.push(array2[i])
  }
  return bubbleSort(array1)
}

function bubbleSort (array) {
  var length = array.length
  for (var i = length - 1; i >= 0; i--) {
    for (var j = 1; j <= i; j++) {
      if (array[j - 1] > array[j]) {
        var temp = arr[j - 1]
        array[j - 1] = array[j]
        array[j] = temp
      }
    }
  }
  return array
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), '=?', [ 1, 2, 3, 4, 4, 5, 6 ])
