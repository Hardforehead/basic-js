const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  var s = '';
  var a = [];
  if (options.addition === undefined) {
    s = s + str;
  } else {
    if (options.additionRepeatTimes === undefined || options.additionRepeatTimes === 1) {
      s = s + str + options.addition;
    } else {
      for (var i = 0; i < options.additionRepeatTimes; i++) {
        a.push('' + options.addition)
      }
      s = s + str + a.join('' + (options.additionSeparator || '|'))
    }
  }
  if (options.repeatTimes === undefined || options.repeatTimes === 1) {
    return s;
  } else {
    var aa = [];
    for (var i = 0; i < options.repeatTimes; i++) {
      aa.push(s);
    }
    var aaa = aa.join('' + (options.separator || '+'));
    return aaa;
  }
}

module.exports = {
  repeater
};
