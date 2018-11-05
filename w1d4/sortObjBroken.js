var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// Sort students by name. if the name is the same, sort by age.

var compareFxn = (studentA, studentB) => {
  var compareResult = studentA.name  <  studentB.name ? -1
                    : studentA.name  >  studentB.name ?  1
                    : studentA.age   <  studentB.age  ? -1
                    : studentA.age   >  studentB.age  ?  1
                    : studentA.age  === studentB.age  ?  0
                    : undefined;
  return compareResult
}

console.log( students.sort(compareFxn) )