var Stack = function(){
  var someInstance = {length: 0};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    this[this.length] = value;
    this.length++;
  };

  someInstance.pop = function(){
    var something = this[this.length-1];
    delete this[this.length-1];
    this.length--;
    this.length = Math.max(0, this.length);
    return something
  };

  someInstance.size = function(){
    return this.length
  };

  return someInstance;
};


//var newStack = Stack();