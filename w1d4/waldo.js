// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach( function found(person, index) {
    if (person === "Waldo") {
      found(index);   // execute callback
    }
  })
}

var action = (locationFound) => {
  console.log("Found him at " + locationFound + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], action);