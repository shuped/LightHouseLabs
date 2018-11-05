let args = process.argv.slice(2)
args.forEach(string => {
  let reverseString = ''
  let i = string.length - 1
  for (i; i >= 0; i--) {
    reverseString += string[i]
  }
  console.log(reverseString)
})
