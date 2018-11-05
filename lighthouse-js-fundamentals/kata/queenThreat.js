/* Lighthouse Labs Web-Dev
Prep Module 6: Queen Threat Detector
Task
In the game of chess, a queen can attack pieces which are on the same row,
column, or diagonal. A chessboard can be represented by an 8 by 8 array.
A 1 in the array represents a queen on the corresponding square, and a O
in the array represents an unoccupied square.

Your program will have a function generateBoard which will return a nested
array representing the board, containing the location of two queens.

It will also have a function called queenThreat that will indicate whether
or not the two queens are positioned so that they attack each other.
*/
function equivalent (value1, value2) {
  return value1.toString() === value2.toString()
}

function gSearchMultidimensionalArray (array, query) {
  // Rectangular only, returns 0 indexed coordinates as 2D array
  let rowLength = array[0].length
  let flat = [].concat.apply([], array)
  let indexes = []
  let index = 0
  for (let element of flat) {
    if (element === query) { indexes.push(index) }
    index++
  }
  // Convert indexes to coordinate arrays
  let coordinates = indexes.map(i =>
    [Math.floor(i / rowLength),
      i % rowLength]
  )
  return coordinates
}

function generateBoard (...pieces) {
  let boardLength = 8
  let generatedBoard = []
  // Empty board
  for (let row = 0; row < boardLength; row++) {
    generatedBoard.push([])
    for (let col = 0; col < boardLength; col++) {
      generatedBoard[row].push(0)
    }
  }
  // Place pieces
  for (let piece of pieces) {
    generatedBoard[piece[0]][piece[1]] = 1
  }
  return generatedBoard
}

function queenThreat (board) {
  let queens = gSearchMultidimensionalArray(board, query = 1)
  for (let queeni of queens) {
    for (let queenj of queens) {
      if (!equivalent(queeni, queenj)) {
        if (queeni[0] === queenj[0] || queeni[1] === queenj[1]) {
          // horizontal or vertical threat
          console.log(`Queens [${queeni}] and [${queenj}] can horizationally or vertically attack`)
          return true
        } else if (Math.abs(queeni[0] - queenj[0]) === Math.abs(queeni[1] - queenj[1])) {
          // diagonal threat
          console.log(`Queens [${queeni}] and [${queenj}] can diagonally attack`)
          return true
        } else {
          return false
        }
      }
    }
  }
}

// Tests
var whiteQueen = [0, 5]
var blackQueen = [5, 0]
var generatedBoard = generateBoard(whiteQueen, blackQueen)
console.log(generatedBoard.toString() ===
  [
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ].toString())
console.log(queenThreat(generatedBoard) === true)

var whiteQueen = [0, 0]
var blackQueen = [5, 7]
var generatedBoard = generateBoard(whiteQueen, blackQueen)
console.log(generatedBoard.toString() ===
  [
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ].toString())
console.log(queenThreat(generatedBoard) === false)
