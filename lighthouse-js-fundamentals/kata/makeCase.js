/* Lighthouse Labs Web-Dev
Prep Module 8: Case Maker, the Sequel

Task
This an extension to the previous Case Maker kata. Create a new file (and gist)
for this kata instead of updating the one from your Case Maker submission.

You'll still be given an input string to convert. However, this time, you'll
also be given a casing style to work with. The following code block will describe
all the casing styles to support. You may also receive an array of casing styles,
and each of these should be applied.

Precedence of each of the casing styles are as follows, values higher in the list
should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
*/

function camelCase (input) {
  let words = input.split(' ')
  let camelWords = []
  camelWords.push(makeFirstLetterLowercase(words[0]))
  for (let i = 1; i < words.length; i++) {
    let newCamelWord = makeFirstLetterUppercase(words[i])
    camelWords.push(newCamelWord)
  }
  return camelWords.join('')
}
function pascalCase (input) {
  let words = input.split(' ')
  let pascalWords = []
  for (let word of words) {
    let newPascalWord = makeFirstLetterUppercase(word)
    pascalWords.push(newPascalWord)
  }
  return pascalWords.join('')
}

function snakeCase (input) {
  let words = input.split(' ')
  let snakeWords = []
  for (let word of words) {
    let newSnakeWord = makeFirstLetterLowercase(word)
    snakeWords.push(newSnakeWord)
  }
  snakeWords = words.join('_')
  return snakeWords
}

function kebabCase (input) {
  let words = input.split(' ')
  let kebabWords = []
  for (let word of words) {
    let newKebabWord = makeFirstLetterLowercase(word)
    kebabWords.push(newKebabWord)
  }
  return kebabWords.join('-')
}

function titleCase (input) {
  let words = input.split(' ')
  let titleWords = []
  for (let word of words) {
    let newTitleWord = makeFirstLetterUppercase(word)
    titleWords.push(newTitleWord)
  }
  return titleWords.join(' ')
}

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

function makeVoelsUppercase (string) {
  return string.replace(/[aeiou]/g,
    letter => letter.toUpperCase())
}

function makeConsonsentsUppercase (string) {
  return string.replace(/[bcdfghjklmnpqrstvwxyz]/g,
    letter => letter.toUpperCase())
}

let makeCase = function (input, cases) {
  let casedWordsS1
  if (cases.includes('camel')) {
    casedWordsS1 = camelCase(input)
  } else if (cases.includes('pascal')) {
    casedWordsS1 = pascalCase(input)
  } else if (cases.includes('snake')) {
    casedWordsS1 = snakeCase(input)
  } else if (cases.includes('kebab')) {
    casedWordsS1 = kebabCase(input)
  } else if (cases.includes('title')) {
    casedWordsS1 = titleCase(input)
  } else {
    casedWordsS1 = input
  }
  let casedWordsS2
  if (cases.includes('vowel')) {
    casedWordsS2 = makeVoelsUppercase(casedWordsS1)
  } else if (cases.includes('consonant')) {
    casedWordsS2 = makeConsonsentsUppercase(casedWordsS1)
  } else if (cases.includes('upper')) {
    casedWordsS2 = casedWordsS1.toUpperCase()
  } else if (cases.includes('lower')) {
    casedWordsS2 = casedWordsS1.toLowerCase()
  } else {
    casedWordsS2 = casedWordsS1
  }
  return casedWordsS2
}


// Tests
console.log(makeCase('this is a string', 'camel'))
console.log(makeCase('this is a string', 'pascal') === 'ThisIsAString')
console.log(makeCase('this is a string', 'snake') === 'this_is_a_string')
console.log(makeCase('this is a string', 'kebab') === 'this-is-a-string')
console.log(makeCase('this is a string', 'title') === 'This Is A String')
console.log(makeCase('this is a string', 'vowel') === 'thIs Is A strIng')
console.log(makeCase('this is a string', 'consonant') === 'THiS iS a STRiNG')
console.log(makeCase('this is a string', ['upper', 'snake']))
