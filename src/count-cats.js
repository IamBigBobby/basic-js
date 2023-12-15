const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

// const matrix = [
//   [0, 1, '^^'],
//   [0, '^^', 2],
//   ['^^', 1, 2]
// ];
function countCats(matrix) {
  let result = 0;


  for (let element of matrix) {
    for (let unit of element){
      if (unit === "^^") {
        result++;
      }
    }
  }

  return result;
}
// console.log(countCats(matrix));
module.exports = {
  countCats
};
