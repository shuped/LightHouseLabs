/* Question 03

Implement a function "checkOverlap", which, when given two objects that represent lines, returns whether they overlap or not.

Lines are represented in this way: {start: 0, end: 10}

(end will always be greater than start)


Example 1:

  checkOverlap({start: 0, end: 10}, {start: 8, end: 15})

Which visually, would be:

   0--------10

         8-------15

         ^^^^ overlap

Returns:

  true



Example 2:

  checkOverlap({start: 12, end: 15}, {start: 0, end: 10})

Which visually, would be:

                 12-------15

   0--------10

                  no overlap

Returns:

  false

*/

//JOEL 'FUNCTOR GOD' SHINNESS SOLUTION
function checkOverlap(lineA, lineB) {
  let lineSpace = Math.max(lineA.end, lineB.end) - Math.min(lineA.start, lineB.start);
  let summedLineLength = lineA.end - lineA.start + lineB.end - lineB.start;
  return lineSpace < summedLineLength;
}

// BORING SOLUTION
// if (lineA.start < lineB.start) {
  //   return lineB.start < lineA.end;
  // }
  // return lineA.start < lineB.end;
  

// OVER GENERALIZED SOLUTION
// let occupiedCoords = function range(lineObj) {
//   // creates array of integer values between start and end
//   let { start, end } = lineObj;
//   let size = end - start;
//   return [...Array(size).keys()].map(i => i + start);
// };

// function checkOverlap(lineA, lineB) {
//   return (function (coordsA, coordsB) {
//     return coordsB.some(function (coord) {
//       return coordsA.indexOf(coord) > 0;
//     });
//   }(occupiedCoords(lineA), occupiedCoords(lineB)));
// }

// Don't change below:

module.exports = checkOverlap;
