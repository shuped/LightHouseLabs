function isPalindrome(s) {
  s = s.split(" ").join("")
  var stringReverse = s.split("").reverse().join("")
  return s == stringReverse;
}

module.exports = isPalindrome;