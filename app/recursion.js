exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var listOfFiles = [];

      for (item in dirName) {
        if (dirName && typeof item === 'string') {
        listOfFiles.push(item);
      }
      else {
        listOfFiles = listOfFiles.concat(listFiles(item));
      }
    }
    return listOfFiles;
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
