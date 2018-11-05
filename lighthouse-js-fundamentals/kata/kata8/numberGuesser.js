/* Lighthouse Labs Web-Dev
Prep Module 8: Number Guesser
Task
In this kata you'll be responsible for setting up your JS file from scratch.
Make sure it is well organized!

Write a guessing game where the user has to guess a secret number. After
every guess the program tells the user whether their number was too large or
too small. At the end, the number of tries needed should be printed.

Inputting the same number multiple times should only count as one try. If the
user provides an answer which isn't a number, print an error message and do not
count this as a try.
*/
const prompt = require('prompt-sync')({ sigint: true })
let maxNumber = 100
let maxGuesses = 10;

function notInt (input) {
  // make sure input is integer
  let result = input.match(/\D|\s/) ? true : false
  return result
}

(function numberGuesser (maxNumber, maxGuesses) {
  console.log(
    `Welcome to Number Guesser! Can you guess my number between 1 and ${maxNumber}?`
  )
  let guess = ''
  let secretNumber = Math.ceil(Math.random() * maxNumber)
  let guessesRemaining = maxGuesses
  let victoryStatus
  while (guessesRemaining > 0) {
    let guessOrGuesses = 
      guessesRemaining === 1 ? 'guess' : 'guesses'
    guess = prompt(
      `Enter your integer number guess (${guessesRemaining} ${guessOrGuesses} remaining): `
    )
    if (notInt(guess)) {
      console.log('Error: Please enter an integer number')
      continue
    }
    guessesRemaining--
    if (guess > secretNumber) {
      console.log('Too High!')
    } else if (guess < secretNumber) {
      console.log('Too Low!')
    } else {
      console.log('Bingo!')
      victoryStatus = true
      break
    }
  }

  if (victoryStatus === true) {
    guessOrGuesses = 
      guessesRemaining === maxGuesses - guessesRemaining ? 'guess' : 'guesses'
    console.log(`Congrats! You won in ${maxGuesses - guessesRemaining} ${guessOrGuesses}. Play again?`)
    var retry = prompt('y/n: ')
  } else {
    console.log('Sorry, you\'ve ran out of guesses! Try again?')
    retry = prompt('y/n: ')
  }

  if (retry === 'y') { numberGuesser(maxNumber, maxGuesses) }
})(maxNumber, maxGuesses)

// Expected Output
// Guess a number:
// > 12
// Too Low!
// Guess a number:
// > 65
// Too High!
// Guess a number:
// > 65
// Already Guessed!
// Guess a number:
// > asdf
// Not a number! Try again!
// Guess a number:
// > 42
