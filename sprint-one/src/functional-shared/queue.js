var Queue = function(){

  var obj = {
    storage : {},
    size: queueMethods.size,
    enqueue: queueMethods.enqueue,
    dequeue: queueMethods.dequeue,
    length: 0,
    head: 0,
    tail: 0
  };

  return obj;
}


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