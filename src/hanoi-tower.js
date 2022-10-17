const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(n, s) {
  var a = Math.pow(2, n) - 1;
  var b = Math.floor(a * (3600 / s));
  return {
    turns: a,
    seconds: b
  }
}

module.exports = {
  calculateHanoi
};
