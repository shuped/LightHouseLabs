var x = [1,2,3,4].reduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator += currentValue * 2
})
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

var y = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'].reduce((allNames,name)=> {
  if (name in allNames) {
    allNames[name] = 1;
  }
  return allNames
}, {});
console.log(countedNames)