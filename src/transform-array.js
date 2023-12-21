const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
// const arr = [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5];
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }

  const copyArr = [...arr];
  const makeArr = [];

  for (let i = 0; i < copyArr.length; i++) {
    if (copyArr[i] === '--discard-next') {
      copyArr.splice(i, 1);
      i++;
    } else if (copyArr[i] === '--double-prev' && i > 0) {
      makeArr.push(copyArr[i - 1]);
    } else if (copyArr[i] === '--double-next' && i < copyArr.length - 1) {
      makeArr.push(copyArr[i + 1]);
    } else if (copyArr[i] === '--discard-prev' && i > 0) {
      copyArr.splice(i - 1, 1);
      i--;
      makeArr.pop();
    } else if (copyArr[i] === '--discard-prev' || copyArr[i] === '--double-prev' && i === 0) {
      continue; 
    } else if (copyArr[i] === '--discard-next' || copyArr[i] === '--double-next' && i === copyArr.length - 1) {
      continue;
    } else {
      makeArr.push(copyArr[i]);
    }
  }

  return makeArr;
}
module.exports = {
  transform
};
