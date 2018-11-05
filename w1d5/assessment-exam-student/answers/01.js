/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
  * MIN - the lowest value in a list
  *
  * For example:
  *
  *    min([6,2,3,4,9,6,1,0,5])
  *
  * Returns:
  *
  *    0
  */
function min (arr) {
  var min = Infinity
  for (element of arr) {
    if (element < min) {
      min = element
    }
  }
  return min
}

/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
function max (arr) {
  var max = -Infinity
  arr.forEach(element => {
    if (element > max) {
      max = element
    }
  })
  return max
}
console.log(min([6, 1, 7, 2, 8]) === 1)
/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
function range (arr) {
  return max(arr) - min(arr)
}

// Don't change below:

module.exports = { min: min, max: max, range: range }
