const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const resultArr = [];
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    console.log(str[i], str[i + 1]);
    
    if (str[i] === str[i + 1]) {
      count++
    } else {
      count === 1 ? resultArr.push(`${str[i]}`) : resultArr.push(`${count}${str[i]}`);
      count = 1;
    }
  }

  return resultArr.join('');
}

module.exports = {
  encodeLine
};
