/*
function will have a prototpye property. new operator creates new object.
 __proto__ will be that function's .prototype

*/

function Coffee() {
  var obj = {}

  obj._proto__ = Coffee.prototype;
}
console.log(Number([[[[[[4]]]]]]))