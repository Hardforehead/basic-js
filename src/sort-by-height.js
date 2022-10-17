const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(a) {
  var b = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== -1) b.push(a[i]);
  }
  b.sort((a, b) => a - b);
  console.log(b);
  var c = 0;
  var d = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      d.push(b[c]);
      c++;
    } else {
      d.push(-1);
    }
  }
  return d;
}
module.exports = {
  sortByHeight
};
