exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    var testsNumber = /\d/g;
    return testsNumber.test(str);
  },

  containsRepeatingLetter: function(str) {
    var hasDuplicates = (/([a-zA-Z]).*?\1/).test(str);      
    return hasDuplicates;
  },

  endsWithVowel: function(str) {
    var endString = (/[aeiou]$/i).test(str);
    return endString;
  },

  captureThreeNumbers: function(str) {
    var regexThreeDigits = /\d{3}/g;
    var myArray = regexThreeDigits.exec(str);
    if (myArray) {
      return myArray[0];
      }
      else {
      return false
      }
  },

  matchesPattern: function(str) {
    var matches = (/^\d{3}.\d{3}.\d{4}$/g).test(str);
      return matches;
  },

  isUSD: function(str) {
    var matchesUSD = (/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/).test(str);
    return matchesUSD;
  }
};
