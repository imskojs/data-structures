var BinarySearchTree = function(value){
  var obj = Object.create(binaryMethods);
  obj.value = value
  obj.left = undefined;
  obj.right = undefined;

  return obj;
};

var binaryMethods = {};

binaryMethods.insert = function (val) {

  if (val < this.value) {

    if (this.left === undefined) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }

  }

  if (val > this.value) {

    if (this.right === undefined) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }

  }

};

binaryMethods.contains = function (val) {

  if (this.value === val) {

    return true;

  } else if (val < this.value) {

    if ( this.left ) {
      return this.left.contains(val);  
    }
    
  } else if (val > this.value) {

    if( this.right ) {
      return this.right.contains(val);
    }

  }

  return false;

};

binaryMethods.depthFirstLog = function (cb) {

  cb(this.value);
  
  if(this.left) {
    this.left.depthFirstLog(cb);
  }

  if(this.right){
    this.right.depthFirstLog(cb);
  }
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
