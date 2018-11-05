function arrayReduce(array, iteratee, accumulator, initAccum) {
  let index = -1
  const length = array == null ? 0 : array.length

  if (initAccum && length) {
    accumulator = array[++index]
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array)
  }
  return accumulator
}

function sum (sum, element) {
  return sum = sum + element
}
var accum
var init = 1
console.log(arrayReduce([1,2,3], sum(accum,init), accum, init))