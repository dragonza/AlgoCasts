// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     for (let row = 0; row < n; row++) {
//       let stair = '';
//       for (let col = 0; col < n; col++) {
//         if (col <= row) {
//           stair += '#';
//         } else {
//           stair += ' ';
//         }
//       }
//         console.log(stair);
//     }
//
// }

// function steps(n, row = 0, stair = '') {
//     if (n === row) {
//       return;
//     }
//     if (stair.length === n) {
//       console.log(stair);
//       steps(n, row + 1);
//       return;
//     }
//     const add = stair.length <= row ? '#' : ' ';
//     steps(n, row, stair + add);

// }

function steps(n) {
  for (let i = 1; i <= n; i++) {
    let stair = '';
    stair += ('#'.repeat(i));
    stair += (' '.repeat(n - i));
    console.log(stair);
  }
}


module.exports = steps;
