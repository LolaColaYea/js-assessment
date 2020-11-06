/* eslint-disable */
exports = typeof window === 'undefined' ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  globals: function() {
    var myObject = { 
    greeting: 'Hola'
  }

  return myObject;
  },

  parseInt: function(num) {
    var parsed = parseInt(num, 10);
    if (Number.isNaN(parsed)) {
      return 0;
    }
    return parsed;
  },

  identity: function(val1, val2) {
    var result = val1 === val2;
    return result;
  }
};
