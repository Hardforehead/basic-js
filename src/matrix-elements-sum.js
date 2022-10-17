const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(m) {
  var a = 0;
  for (var j = 0; j < m[0].length; j++) {
    a = a + m[0][j];
  }
  for (var i = 1; i < m.length; i++) {
    for (var j = 0; j < m[i].length; j++) {
      if (m[i-1][j] !== 0) a = a + m[i][j];
    }
  }
return a;
}

module.exports = {
  getMatrixElementsSum
};
