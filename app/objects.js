exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    var result = fn.call(obj);
    return result 
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {

    var arr = [];

    for (var key in obj) {
      if (obj.hasOwnProperty(key) === false) continue;
      arr.push( key + ": " + obj[key] ); 
    }
    return arr
  }
};
