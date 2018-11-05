/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occuring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */

function mode (arr) {
  var countArray = []
  var max = arr[0]
  for (let number of arr) {
    if (!countArray[number]) {
      countArray[number] = 1
    } else {
      countArray[number]++
    }
    if (countArray[max] < countArray[number]) {
      max = number
    }
  }

  return max
}

// Don't change below:

module.exports = { mode: mode }
