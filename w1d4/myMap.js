var myList = [1,2,3,4]

function myMap(array, callback) {
  if (!Array.isArray(array)) 
    return new Error("myMap called on object that isn't an array");

  var mapping = []
  for (var index = 0; index < array.length; index++) {
    mapping.push(callback(array[index], index, array));
  }

  return mapping;
}
console.log(myMap(myList, x => x + 1))