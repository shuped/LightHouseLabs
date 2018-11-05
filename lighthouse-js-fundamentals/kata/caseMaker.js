/* Lighthouse Labs Web-Dev
Prep Module 6: Case Maker

Task
You'll be given a string which you'll have to convert to Camel Case. Return the resulting value from your function.
*/

function makeFirstLetterLowercase (word) {
  let firstLetter = word.slice(0, 1)
  let restOfWord = word.slice(1 /* to end */)
  return firstLetter.toLowerCase() + restOfWord
}

function makeFirstLetterUppercase (word) {
  let firstLetter = word.slice(0, 1)
  let restOfWord = word.slice(1 /* to end */)
  return firstLetter.toUpperCase() + restOfWord
}

let camelCase = function (input) {
  let words = input.split(' ')
  let camelWords = []
  camelWords.push(makeFirstLetterLowercase(words[0]))
  for (let i = 1; i < words.length; i++) {
    let newCamelWord = makeFirstLetterUppercase(words[i])
    camelWords.push(newCamelWord)
  }
  return camelWords.join('')
}

console.log(camelCase('this is a string'))
console.log(camelCase('Loopy Lighthouse'))
console.log(camelCase('supercalifragalisticexpialidocious'))

// Expected Output
// thisIsAString
// loopyLighthouse
// supercalifragalisticexpialidocious
