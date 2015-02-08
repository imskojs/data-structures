var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var tree = Tree(value);
  this.children.push(tree);
};

treeMethods.contains = function(target){
  function diver (tree) {
    if (tree.value === target) {
      return true;
    } else {
      var subtrees = tree.children;
      for (var i = 0; i < subtrees.length; i++) {
        if ( diver(subtrees[i]) ) {
          return true;
        }
      };
      return false;
    }
  }
  return diver(this);
};
