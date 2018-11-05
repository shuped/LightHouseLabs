/* LightHouse Labs Wed-Dev
Prep Module 4: Loopy LightHouse
Problem:
Write a program that prints the numbers from 100 to 200 to the console, with three exceptions:

  If the number is a multiple of 3, print the string "Loopy" instead of the number.
  If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
  If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
By print, we are of course referring to console.log.
*/

function loopyLighthouse (range, multiples, words) {
  const [start, end] = range
  const [a, b] = multiples
  for (let i = start; i <= end; i++) {
    let loopyString = ''
    if (i % a === 0) {
      loopyString += words[0]
    }
    if (i % b === 0) {
      loopyString += words[1]
    }
    console.log(loopyString || i)
  }
}
loopyLighthouse([15, 90], [2, 5], ['Batty', 'Beacon'])
