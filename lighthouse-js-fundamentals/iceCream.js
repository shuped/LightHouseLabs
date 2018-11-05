/* Exercise in Module 4 of Light house Labs
Learning Outcomes:
can add an element to the end of an array (push)
can access an element in an array by index ([])
can access the first element in an array
can access the last element in an array
can get the length of an array
*/

var iceCreamFlavours = ['chocolate', 'vanilla', 'cookies and cream', 'rocky road', 'strawberry']
console.log(iceCreamFlavours)

/*
Add the flavour "root beer" to the
array without modifying the original array.
*/
iceCreamFlavours.push('root beer')
console.log(iceCreamFlavours)

/*
console.log the first flavour in the array, which should come out to
 be "chocolate". Index it from the array, do not hard-code the value
 by just doing console.log("chocolate").
 */
console.log(iceCreamFlavours[0])

/*
console.log the last flavour in the array, which should be "root beer"
*/
console.log(iceCreamFlavours[iceCreamFlavours.length - 1])

/*
print length of array
*/
console.log(iceCreamFlavours.length)
