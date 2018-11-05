var students = [
  { id: 2, name: "zoidberg", age: 22 },
  { id: 2, name: "zoidberg", age: 28 },
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 28 },
  { id: 3, name: "alex",     age: 22 },
  { id: 2, name: "zoidberg", age: 28 },
  { id: 4, name: "alex",     age: 30 }
];

var sortValues = (valueA, valueB) => {
  return valueA > valueB
}

var compareAttributes = (studentA, studentB) => {
  var nameA = studentA.name.toUpperCase();
  var nameB = studentB.name.toUpperCase();
  
  if (nameA !== nameB) {
    return sortValues(nameA, nameB)
  } else {
    return sortValues(studentA.age, studentB.age)
  }
}

console.log(students.sort(compareAttributes))

