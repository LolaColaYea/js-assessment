exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var countedOccurences = 0;
    var stringResult = '';
    for(var i = 0; i < str.length; i++) {
      if (str[i] === str[i+1]) {
        countedOccurences++;
        if (countedOccurences < amount) {
          stringResult += str[i];
        }
      }
        else {
          countedOccurences = 0;
          stringResult += str[i];
        }
      };
      return stringResult;
  },

  wordWrap: function(str, cols) {
    var formattedString = '',
    arrayOfWords = [];

    arrayOfWords = str.split(' ');

    formattedString = arrayOfWords[0];

    for (var i = 1; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].length > cols) {
            formattedString += '\n' + arrayOfWords[i];
        } else {
            if (formattedString.length + arrayOfWords[i].length > cols) {
                formattedString += '\n' + arrayOfWords[i];
            } else {
                formattedString += ' ' + arrayOfWords[i];
            }
        }
    }
    return formattedString;
  },

  reverseString: function(str) {
      return str.split('').reverse().join('');
  }
};
