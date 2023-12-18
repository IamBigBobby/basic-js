const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
// const names = ['a', 'b', 'cd', 'b ', 'a(3)'];
function renameFiles(names) {
  console.log(names);
  const newNames = [];
  let numberOfRepetitions = 0;

  for (let i = 0; i < names.length; i++) {
    for (let j = i + 1; j < names.length; j++){
      if (names[i] === names[j]) {
        numberOfRepetitions++
        names[j]+=`(${numberOfRepetitions})`
      }
    }
    numberOfRepetitions = 0;
  }
  return names;
}
module.exports = {
  renameFiles
};
