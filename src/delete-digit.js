const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const number = String(n).split('').map((element) => Number(element));

  let removeIndex = -1;

  for (let i = 0; i < number.length - 1; i++) {
    if (number[i] < number[i + 1]) {
        removeIndex = i;
        break;
    }
  }

  if (removeIndex !== -1) {
    number.splice(removeIndex, 1);
  } else {
    number.pop();
  }

  return parseInt(number.join(''));
}

module.exports = {
  deleteDigit
};
