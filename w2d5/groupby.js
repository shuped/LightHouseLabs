function groupBy(arr, cb) {
  return arr.reduce((acc, obj) => {
      let key = cb(obj);
      let objs = arr.filter(obj => key === cb(obj));
      return { ...acc, [key]: objs }
  }, {});
}



var list = [
  {id: "102", name: "Alice"},
  {id: "102", name: "Bob", title: "Dr."},
  {id: "592", name: "Clyde", age: 32}
];

console.log(groupBy(list, function(i) { return i.id; }))