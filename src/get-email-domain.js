const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  var a = email.split('').reverse();
  var b = '';
  for (var i = 0; i < a.length; i++) {
     if (a[i] === '@') {
        b = a.slice(0, i).reverse().join('');
        break;
     }
  }
  return b;
}

module.exports = {
  getEmailDomain
};
