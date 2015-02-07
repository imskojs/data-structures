var Queue = function(){
  var someInstance = {
    length: 0,
    head: 0,
    tail: 0
  };

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[this.tail] = value;
    this.tail++;
    this.length++;
  };

  someInstance.dequeue = function(){
    var results = storage[this.head];
    delete storage[this.head];
    this.head++;
    this.length--;
    this.length = Math.max(0, this.length);
    return results; 
  };

  someInstance.size = function(){
    return this.length;
  };

  return someInstance;
};
