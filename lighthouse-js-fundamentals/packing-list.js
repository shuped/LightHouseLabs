/* LightHouse Labs Web-Dev
Prep Module 4 Programming Intro
Learning Outcomes:
    can explain "loops" and why they are used
    can list various loops and when each should be used
    can explain the syntax of a while loop
    can explain the syntax of a do loop
    can explain the difference between a while loop and a do loop
    can use a while loop
    can use a do loop
    can explain the syntax of a for loop
    can use for loops
    can break out of a loop
    can explain what is meant by "infinite loop"
    can use a for loop to iterate through values in an array
http://eloquentjavascript.net/02_program_structure.html#h_FaGGgUI+MM
*/
var packingList = ['bowls', 'plates', 'pots', 'pans', 'eating utensils', 'glasses', 'cups', 'cooking utensils']

console.log('Kitchen stuff to pack:')
for (var i = 0; i < packingList.length; i++) {
  console.log(packingList[i])
}
