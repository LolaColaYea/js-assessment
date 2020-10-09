exports = typeof window === 'undefined' ? global : window;

exports.logicalOperatorsAnswers = {
  or: function(a, b) {
      return a > 0 || b > 0;
  },

  and: function(a, b) {
      return a > 0 & b > 0;
  }
};
