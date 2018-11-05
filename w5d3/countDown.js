let countDownFrom = (num) => {
  if (num === 0) return
  console.log(num)
  countDownFrom(num - 1)
}

countDownFrom(10)

let catagories = [
  { id: 'animals', 'parent': null},
  { id: 'mammals', 'parent': 'animals'},
  { id: 'cats', 'parent': 'mammals' },
  { id: 'dogs', 'parent': 'mammals'},
  { id: 'chihuahua', 'parent': 'dogs'},
  { id: 'lab', 'parent': 'dogs'},
  { id: 'persian', 'parent': 'cats'},
  { id: 'siamese', 'parent': 'cats'}
]

let makeTree = (catagories, parent) => {
  let node = {}
  catagories
    .filter(c => c.parent === parent)
    .forEach(c => 
      node[c.id] = makeTree(catagories, c.id))
  return node
}

console.dir(
  JSON.stringify(
    makeTree(catagories, null)
  )
)
