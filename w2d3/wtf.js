let foo;
var und = typeof foo
console.log(typeof und)

var arr = [3]
arr['ahf']=2;
console.log()
console.log(Array.isArray(arr))
console.log(
  Object.keys(arr)
)
for(let elm of arr) {
  console.log(elm, 'k')
  console.log(arr['ahf'])
}
console.log('-')
console.log(arr.hasOwnProperty('ahdf'))
arr.reduce((acc,elm) => console.log(elm))