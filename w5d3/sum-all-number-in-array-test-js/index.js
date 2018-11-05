function sumItems(array) {
  // Sum all the numbers in the nested array
  let sum = 0;
  array.forEach(elm => {
    if (Array.isArray(elm)) {
      sum += sumItems(elm);
    } else {
      sum += elm
    }
  })
  return sum
}

module.exports = sumItems;