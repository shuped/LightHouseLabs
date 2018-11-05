/* Lighthouse Labs Web-Dev
Prep Module 6: Talking Calendar
Task
You'll be given a date as a string (not a Date object). The date will always be
formatted as YYYY/MM/DD. You'll be expected to parse the given string and produce
a human readable date.
*/
function talkingCalendar (dateString) {
  // expected dateSting 'YYYY/MM/DD'
  let dateNums = dateString.split('/'),
    year = dateNums[0],
    month = dateNums[1],
    day = dateNums[2],
    monthString = months[parseInt(month) - 1],
    dayString = suffixify(day)
  return `${monthString} ${dayString}, ${year}`
}

let suffixify = (numberString) => {
  // returns string of number with suffix
  let ones = numberString.slice(-1),
    tenths = numberString.slice(-2, -1),
    number = parseInt(numberString),
    suffix
  if (tenths == 1) {
    suffix = 'th'
  } else if (ones == 1) {
    suffix = 'st'
  } else if (ones == 2) {
    suffix = 'nd'
  } else if (ones == 3) {
    suffix = 'rd'
  } else {
    suffix = 'th'
  }
  return number + suffix
}

let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

console.log(talkingCalendar('2017/12/02'))
console.log(talkingCalendar('2007/11/11'))
console.log(talkingCalendar('1987/08/24'))
// Expected Output
// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987
