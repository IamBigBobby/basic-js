const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
// let sampleActivity = ' ';
function dateSample(sampleActivity) {
  if (!(typeof sampleActivity === "string") || isNaN(sampleActivity) || arguments.length === 0) {
    return false;
  }

  const finalActivity = Number(sampleActivity);

  // console.log(finalActivity);

  if (finalActivity <= 0 || finalActivity > 15) {
    return false;
  }
  const approximateAge = (Math.log(MODERN_ACTIVITY / finalActivity) * HALF_LIFE_PERIOD) / 0.693;

  return Math.ceil(approximateAge);
}
// console.log(dateSample(sampleActivity));
module.exports = {
  dateSample
};
