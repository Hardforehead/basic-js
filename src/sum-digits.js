const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  var a = Math.abs(n).toString().split('');
  var s = 0;
  for (var i in a) {
    s = s + Number(a[i]);
  }
  if (a.length > 1) {
    s = getSumOfDigits(s);
  }
  return s;
}

module.exports = {
  getSumOfDigits
};
