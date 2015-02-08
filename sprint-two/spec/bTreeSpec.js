describe('bTree', function() {
  var bTree;

  beforeEach(function() {
    bTree = new Btree(1);
  });

  // Tese tests for creating new b-Trees
  it('should be an object', function () {
    expect(bTree).to.be.a('object');
  });

  it('should have an value 1', function () {
    expect(bTree.value).to.equal(1);
  });

  it('should have insert, remove, find', function () {
    
  })

  //test for functionality













  xit('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstLog).to.be.a("function");
  });

  xit('should insert values at the correct location in the tree', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  xit('should have a working "contains" method', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  xit('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    console.log(array);
    expect(array).to.eql([5,2,3]);
  });
});
