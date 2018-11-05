/* Question 2
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */
function median (arr) {
  var sortedArr = arr.sort((a, b) => {
    return a - b
  })
  if (arr.length % 2 === 0) {
    return (sortedArr[(arr.length - 1) / 2 - 0.5] + arr[(arr.length - 1) / 2 + 0.5]) / 2
  } else {
    return sortedArr[(arr.length - 1) / 2]
  }
}
console.log(median([1, 3, 2, 4]))
function round (number) {
  return Math.round(number * 100) / 100
}

// Don't change below:

module.exports = { median: median }
