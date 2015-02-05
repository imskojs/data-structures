var Queue = function() {
  this.length = 0;
  this.storage = {}
  this.head = 0;
  this.tail = 0;
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

Queue.prototype = queueMethods;
Queue.prototype.constructor = Queue;