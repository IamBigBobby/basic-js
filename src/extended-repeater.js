const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  console.log(str, options.repeatTimes, options.separator, options.addition, options.additionRepeatTimes, options.additionSeparator);

  if (str === null) {
    str = 'null';
  }

  if (str.toString() === '[object Object]') {
    str = 'STRING_OR_DEFAULTSTRING_OR_DEFAULT';
  }

  for (let element in options) {
    if (options[element] === null) {
      options[element] = 'null';
    }

    if (typeof options[element] === "object" && !Array.isArray(options[element])) {
      for (let part in options[element]){
        element = options[element][part];
      }
    }
  }

  options.addition === undefined ? options.addition = '' : options.addition;
  options.separator === undefined ? options.separator = '+' : options.separator;
  options.additionSeparator === undefined ? options.additionSeparator = '|' : options.additionSeparator;

  let baseStrArr = [];

  if (options.repeatTimes === undefined) {
    return `${str.toString()}${options.addition}`;
  }

 
  for (let i = 0; i < options.repeatTimes; i++) {
    baseStrArr.push(str.toString());

    if (options.additionRepeatTimes !== undefined) {
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        if (j === options.additionRepeatTimes - 1) {
          baseStrArr.push(options.addition);
        } else {
          baseStrArr.push(options.addition);
          baseStrArr.push(options.additionSeparator);
        }
      }
    }

    baseStrArr.push(options.separator);
  }

  baseStrArr.pop();

  return baseStrArr.join('');
}

module.exports = {
  repeater
};
