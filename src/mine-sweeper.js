const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
// const matrix = [
//   [true, false, false],
//   [false, true, false],
//   [false, false, false],
// ]
function minesweeper(matrix) {
  let zeroArr = [];

  for (let i = 0; i < matrix.length; i++) {
    let rowArr = [];
    for (let j = 0; j < matrix[i].length; j++) {
      rowArr.push(0);
    }
    zeroArr.push(rowArr);
  }

  for (let i = 0; i < zeroArr.length; i++) {
    for (let j = 0; j < zeroArr[i].length; j++) {
      if (matrix[i][j] === true) {
        if (i - 1 >= 0 && zeroArr[i - 1][j] !== undefined) {
          zeroArr[i - 1][j]++;
        }
        if (j - 1 >= 0 && zeroArr[i][j - 1] !== undefined) {
          zeroArr[i][j - 1]++;
        }
        if (j + 1 < zeroArr[i].length && zeroArr[i][j + 1] !== undefined) {
          zeroArr[i][j + 1]++;
        }
        if (i + 1 < zeroArr.length && zeroArr[i + 1][j] !== undefined) {
          zeroArr[i + 1][j]++;
        }
        if (i - 1 >= 0 && j - 1 >= 0 && zeroArr[i - 1][j - 1] !== undefined) {
          zeroArr[i - 1][j - 1]++;
        }
        if (i - 1 >= 0 && j + 1 < zeroArr[i].length && zeroArr[i - 1][j + 1] !== undefined) {
          zeroArr[i - 1][j + 1]++;
        }
        if (i + 1 < zeroArr.length && j - 1 >= 0 && zeroArr[i + 1][j - 1] !== undefined) {
          zeroArr[i + 1][j - 1]++;
        }
        if (i + 1 < zeroArr.length && j + 1 < zeroArr[i].length && zeroArr[i + 1][j + 1] !== undefined) {
          zeroArr[i + 1][j + 1]++;
        }
      }
    }
  }

  return zeroArr;
}
// console.log(minesweeper(matrix));
module.exports = {
  minesweeper
};
