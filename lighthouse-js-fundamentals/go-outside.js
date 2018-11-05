/* LightHouse Labs Web-Dev
Prep Module 4 Conditional Execution
Lession Outcomes:
    can explain what "conditionals" are and why they are used
    understands how if/else-if/else works
    can conditionally execute code using if/elseif/else
    can list common logical operators and what they do
    can use common logical operators
    can list common comparison operators and what they do
    can use common comparison operators
    can create conditional statements combining multiple logical and comparison operators
http://eloquentjavascript.net/02_program_structure.html#h_rDxYNPd65Z
*/

var raining = true
if (raining) {
  console.log("Don't forget your umbrella!")
}

// var cold = false;
// if (cold) {
//     console.log("Make sure you pick out a scarf!");
//   } else {
//     console.log("Short sleeves are fine.");
//   }

var temperature = -1
if (temperature < 0) {
  console.log('Make sure you pick out a scarf!')
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!")
} else {
  console.log('Short sleeves are fine.')
}

console.log("Now you're ready to go outside!")
