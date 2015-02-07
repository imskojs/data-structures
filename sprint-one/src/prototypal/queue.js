var Queue = function() {
  var result = Object.create(queueMethods);
  result.length = 0;
  result.head = 0;
  result.tail = 0;
  result.storage = {};
  return result;
};

var queueMethods = {
  size: function(){
    return this.length;
  },
  enqueue: function (val) {
    this.storage[this.tail++] = val;
    this.length++;
  },
  dequeue: function () {
    var result = this.storage[this.head];
    delete this.storage[this.head];
    this.length--;
    this.length = Math.max(0, this.length);
    this.head++;
    return result;
  }
};