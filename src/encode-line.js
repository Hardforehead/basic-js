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
  var a = 1;
  var s = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      a++;
    } else {
      if (a === 1) {
        s = s + str[i];
      } else {
        s = s + a + str[i];
        a = 1;
      }
    }
  }
  return s;
}

module.exports = {
  encodeLine
};
