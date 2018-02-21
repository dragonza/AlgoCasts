// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   const centerPoint = Math.floor((2 * n - 1 )/2);
//   for (let r = 0; r < n; r++) {
//     let stair = '';
//     for (let col = 0; col < 2 * n - 1; col++) {
//       if (col < centerPoint - r || col > centerPoint + r) {
//         stair += ' ';
//       } else {
//         stair += '#';
//       }
//     }
//     console.log(stair);
//   }
//
// }

function pyramid(n, row = 0, stair = '') {
  const midPoint = Math.floor((2 * n - 1) / 2);
  if (n === row) {
    return;
  }

  if (stair.length === 2 * n - 1) {
    console.log(stair);
    return pyramid(n, row + 1)
  }

  if (stair.length < midPoint - row || stair.length > midPoint + row) {
    stair += ' ';
  } else {
    stair += '#';
  }
  pyramid(n, row, stair);
}

module.exports = pyramid;
