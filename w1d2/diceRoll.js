let randomNumber1to6 = () => {return Math.ceil(Math.random() * 6)}

(function diceRoll() {
  let dice = process.argv.slice(2)
  let rolls = []
  for (let i = 0; i < dice; i++) {
    rolls.push(randomNumber1to6())
  }
  let string = `Rolled ${dice} dice: ` + rolls.join(', ')
  console.log(string)
})()
