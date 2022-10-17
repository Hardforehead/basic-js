const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(d) {
  if (d === undefined) return 'Unable to determine the time of year!';
  try {
    var y = d.getUTCFullYear()
    var m = d.getMonth()
    if (((d instanceof Date))) {
      if (m < 2) return 'winter';
      if (m < 5) return 'spring';
      if (m < 8) return 'summer';
      if (m < 11) return 'autumn';
      return 'winter';
    }
    else {
      throw new Error('Invalid date!')
    }
  } catch {
    throw new Error('Invalid date!')
  }
}

module.exports = {
  getSeason
};
