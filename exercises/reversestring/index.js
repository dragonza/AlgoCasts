// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reverse().join('');
}

function reverse1(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

function reverse2(str) {
    let reversed = '';
    for (let char of str) {
      reversed = char + reversed;
    }
    return reversed;
}

function reverse3(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
}

module.exports = reverse3;
