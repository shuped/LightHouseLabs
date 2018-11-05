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

Problem:
Write a loop under each comment in the file. Under the first,
write a while loop that prints out each item of ingredients.
Under the second, write a for loop that does the same thing.
And under the third, write any loop, while or for that prints
out each item of ingredients but backwards (that is, the
first should be "bananas" and the last "eggs").
*/

var ingredients = ['eggs', 'milk', 'flour', 'sugar', 'baking soda', 'baking powder', 'chocolate chips', 'bananas']

// Write a while loop that prints out the contents of ingredients:
{ let i = 0
  while (i < ingredients.length) {
    console.log(ingredients[i])
    i++
  } }
// Write a for loop that prints out the contents of ingredients:
for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i])
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i])
}
