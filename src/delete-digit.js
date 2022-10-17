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
  var a = n.toString().split('');
  for (var i = 0; i < a.length; i++) {
    if (a[i + 1]) {
      if (a[i] < a[i + 1]) {
        var b = Number(a.join('').slice(0, i) + a.join('').slice(i + 1));
        return b;
      }
    } else {
      b = Number(a.join('').slice(0, i))
      return b;
    }
  }
}

module.exports = {
  deleteDigit
};
