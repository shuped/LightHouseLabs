function makeIdGenerator() {
  var id = 0;

  // The following is the closure function
  return function() {
    // This inner function accesses and assigns the value of
    // the variable id, which was defined in the parent function
    id += 1;
    return id;
  }
}

// makeIdGenerator returns a function which is assigned to
// the variable nextId
var nextId = makeIdGenerator();

console.log(nextId()); // Logs: 1
console.log(nextId()); // Logs: 2

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var index = -1;

  return function() {
    index++
    return list[index]
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6

function countdownGenerator(timerValue) {
  var outputString = ''
  return function() {
    if (timerValue > 1) {
      outputString += 'T-minus ' + timerValue + '...'
    } else if (timerValue === 0) {
      outputString += 'Blast Off!'
    } else {
      outputString += 'Rockets already gone, bub!'
    }
    timerValue--
    console.log(outputString)
  }
}
var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 3...
countdown(); // T-minus 3...

