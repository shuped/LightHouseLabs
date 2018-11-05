function readPassword() {
  var args = process.argv.slice(2)
  return args[0]
}

function obfuscatePassword() {
  var password = readPassword()
  var obfuscatedString = ""
  for (var i = 0; i < password.length; i++) {
    switch (password[i]) {
      case "a":
        obfuscatedString += "4"
        break
      case "e":
        obfuscatedString += "3"
        break
      case "o":
        obfuscatedString += "0"
        break
      case "l":
        obfuscatedString += "1"
        break
      default:
        obfuscatedString += password[i]
        break
    }
  }
  return obfuscatedString
}
console.log(obfuscatePassword())