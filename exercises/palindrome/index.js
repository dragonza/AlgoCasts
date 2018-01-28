// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     const arr = str.split('');
//     return arr.every((char, i) => char === str[str.length - 1 -i]);
// }

// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   return str === reversed;
// }

function palindrome(str) {
  for (var i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 -i]) {
      return false;
    }
  }
  return true;
}

module.exports = palindrome;
