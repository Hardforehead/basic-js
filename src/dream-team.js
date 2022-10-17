const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(m) {
  if (!Array.isArray(m)) return false;
  var a = '';
  for (var i in m) {
    if (typeof m[i] === 'string') {
      a = a + m[i].trim(' ').slice(0, 1);
    }
  }
  var b = a.toUpperCase();
  var c = b.split('').sort().join('');
  return c;
}

module.exports = {
  createDreamTeam
};
