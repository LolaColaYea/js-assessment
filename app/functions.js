exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    var result = fn.apply (this, arr)
    return result
  },

  speak: function(fn, obj) {
    var result = fn.call(obj)
    return result
  },

  functionFunction: function(str) {
    function b(str1) {
      var result = str+', '+str1;
      return result
    }
    return b
  },

  makeClosures: function(arr, fn) {
    var funcs = []

    for (var i = 0; i < arr.length; i++) {
        var result = function() {
            return fn(arr[i])
        }
        funcs.push(result)
    }
    return funcs
  },

  partial: function(fn, str1, str2) {
    function HelloEllie (str3) {
      return fn(str1, str2, str3)
    }
    return HelloEllie
  },

  useArguments: function() {
    var sum = 0;

    for(var i = 0; i < arguments.length; i++) {
      sum+=arguments[i]
    }
    return sum
  },

  callIt: function(fn) {
    for(var i = 0; i < arguments.length; i++) {
      fn(arguments[i])
    }
    return
  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
