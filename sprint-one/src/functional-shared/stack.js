var Stack = function() {
  var result = {
    pop: stackMethods.pop,
    push: stackMethods.push,
    size: stackMethods.size,
    length: 0,
    storage: {}
  };
  return result;
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