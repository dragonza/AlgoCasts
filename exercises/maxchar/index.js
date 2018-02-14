// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {};
  for (let char of str) {
    obj[char] = obj[char] + 1 || 1;
  }
  let maxChar = '';
  let max = 0;

  Object.keys(obj).forEach(char => {
    if (obj[char] > max) {
      maxChar = char;
      max = obj[char];
    }
  });
  return maxChar;

}

function maxChar(str) {
  const obj = {};
  str.split('').forEach(char => obj[char] + 1 || 1);
  return Object.keys(obj).reduce((prev, next) => obj[a] >= obj[b] ? a : b);
}


module.exports = maxChar;
