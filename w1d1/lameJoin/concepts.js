/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

function joinList (conceptList) {
  // function to create the string that will be put into the sentence
  if (conceptList.length === 0) {
    return 'nothing'
  }
  // create empty string
  var conceptString = ''
  // loop over all but the last element, and add comma plus word
  let i = 0
  for (i; i < conceptList.length - 1; i++) {
    conceptString = conceptString + conceptList[i] + ', '
  }
  // add the last element with proper grammer, return string
  conceptString = conceptString + conceptList[i]
  return conceptString
}

let conceptList = ['gists', 'types', 'operators', 'iteration', 'problem solving']
let concepts = joinList(conceptList)
console.log('Today I learned about ' + concepts + '.')
