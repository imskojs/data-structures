var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

  };

  list.removeHead = function(){
    if (!this.head) {
      return null;
    }

    var nextHead = this.head.next;
    var val = this.head.value;
    delete this.head;
    this.head = nextHead;
    return val;
  };

  list.contains = function(target){

    function checker(node) {

      if (node) {
        if ( node.value === target ) {
          return true;
        }
      } else {
        return false;
      }

      return checker(node.next);
    }

    return checker(this.head)
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 // Before removing first node. 
 // Point list.head to node.next.
 // Then remove first node.