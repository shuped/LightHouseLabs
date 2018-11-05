var i = {}
var j = [] + {}
var k = {} + []
var l = {} + {}

console.log(typeof i);
console.log()
console.log(j)
console.log(k)
console.log({} + {})


var i;
//C#
//int i;


var i = 89;
var x = 90;
var result = i  + x;
var firstName = "rohit";
var lastName = "dhand"
firstName + lastName
//concat

function t(){
 // djjd
}
function s(){

}
var a = new t();
var b = new s();
console.log(a + b)

const luke = 'luke';
const thing = 1;


var dontMutate = [1,2,3]
var newArr = []
newArr.push(dontMutate[1])
newArr[0] = 4
var newArr2 = dontMutate.map(element => element)
console.log(dontMutate[0])
console.log(dontMutate[0], dontMutate[1])
var string = 'thisisastring'
var arr = [...string]
arr
 
var original = { a: 1, b: 2 };
var copy = original; // copy => { a: 1, b: 2, c: 3 }

copy['a'] = 4
console.log('-')
console.log(original, copy)


var assignedUndef = undefined 
var undef;

console.log(typeof assignedUndef !== undefined)

var foo;
console.log(typeof foo === 'undefined')

//var acc = 0
newArr2
console.log(newArr2.reduce((acc, cur) =>  {return acc += cur + 1},undefined))
function derp (arg1, arg2, arg3) {
  console.log(arguments)
}
derp(1,2, undefined)

var str = '{"a":1, "b":2, "foo":"bar"}'; // string version of a JS Object
var obj = JSON.parse(str);

console.log(obj);     // an Object that has been deserialized

delete obj.foo;       // modify the object
JSON.stringify(obj); 
obj 

console.log('0')
console.log(newArr2.forEach(function (element) {
  console.log(element)
  return element
}))
var A = 'a'
console.log(obj.a)
console.log(obj.A)
console.log(obj)

obj['a']++
console.log(obj)