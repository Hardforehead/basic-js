const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if ((!Array.isArray(arr))) throw new Error("'arr' parameter must be an instance of the Array!");
  var c = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  var a = [];
  for (var i = 0; i < arr.length; i++) {
    var b = arr[i];
    if (!c.includes(b)) { a.push(b); }
    if (arr[i + 1] && b === '--discard-next') { i++; }
    if (arr[i - 1] && b === '--discard-prev' &&  arr[i - 2] !== '--discard-next') { a.pop(); }
    if (arr[i + 1] && b === '--double-next') { a.push(arr[i + 1]); }
    if (arr[i - 1] && b === "--double-prev" && arr[i - 2] !== '--discard-next') { a.push(arr[i - 1]); }
  }
  return a;
}

module.exports = {
  transform
};
