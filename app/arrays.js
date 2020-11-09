exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {

    var result = -1

      for (var i = 0; i < arr.length; i++) {
        if (item === arr[i]) {
          result = i;
        }
      }
    return result
  },

  sum: function(arr) {
      return arr.reduce(function(sum, current){
        return sum + current;
      }, 0);
  },

  remove: function(arr, item) {

    const result = arr.filter(function(value) {
      return value !== item;
    })
    return result
  },

  removeWithoutCopy: function(arr, item) {

    for (var i = 0; i < arr.length; i++) {
      if (item === arr[i]) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr
  },

  append: function(arr, item) {
    arr.push(item)
    return arr
  },

  truncate: function(arr) {
    arr.pop()
    return arr
  },

  prepend: function(arr, item) {
    arr.unshift(item)
    return arr
  },

  curtail: function(arr) {
    arr.shift()
    return arr
  },

  concat: function(arr1, arr2) {
    var arr3 = arr1.concat(arr2)
    return arr3
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count: function(arr, item) {

    var count = 0

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++
      }
    }
    return count
  },

  duplicates: function(arr) {
    var counts = {};
    var results = [];

    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];

      if (counts[item] >= 1) {
        counts[item]++;
      } else {
        counts[item] = 1;
      }
      
      if (counts[item] === 2) {
        results.push(item);
      }
    }
    return results;
  },

  square: function(arr) {
    return arr.map(function (item) {
      return Math.pow(item,2);
    }) 
  },

  findAllOccurrences: function(arr, target) {
    var theIndexesOfTarget = [];
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] === target)
            theIndexesOfTarget.push(i);
    }
    return theIndexesOfTarget;
  }
};
