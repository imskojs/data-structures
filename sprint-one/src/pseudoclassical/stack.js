var Stack = function() {
  this.length = 0;
  this.storage = {};
};

var stackMethods = {
  pop: function(){
    var result = this.storage[this.length-1]
    delete this.storage[this.length-1];
    this.length--;
    this.length = Math.max(0, this.length);
    return result;
  },

  push: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },

  size: function(){
    return this.length;
  }

};

Stack.prototype = stackMethods;
Stack.prototype.constructor = Stack;