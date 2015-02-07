

var Graph = function(){
  this.nodes = {};
  //[  {id: value:}             ]
  this.edges = [];
};

/*var NodeMaker = function(){
  var count = 0;
  return function(value){ return {value: value, id: count++}}
}
var _Node = NodeMaker();

*/

var _Node = function () {
  this.id = _Node.prototype.count++
}
_Node.prototype.count = 0;


Graph.prototype.addNode = function(node){
  var newNode = new _Node();
  this.edges[newNode.id] = [];
  this.nodes[node] = newNode;
};

Graph.prototype.contains = function(node){
  return !!this.nodes[node];
};


Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};


Graph.prototype.hasEdge = function(fromNode, toNode){
  var node1 = this.nodes[fromNode].id;
  var node2 = this.nodes[toNode].id;
  var array = this.edges[node1]
  for(var i = 0; i < array.length; i++){
    if(array[i] === node2){
      return true;
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var node1 = this.nodes[fromNode].id;
  var node2 = this.nodes[toNode].id;
  this.edges[node1].push(node2);
  this.edges[node2].push(node1);

};

Graph.prototype.removeEdge = function(fromNode, toNode){
  //if implement edge as hashtable everything is O(1)?
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, function(node, key, nodes){
    cb(key);
  });
};




 // Adjacency Lists
/* Edges | Nodes
[ [1, 6, 8],
  [0, 4, 6, 9],
  [4, 6],
  [4, 5, 8],
  [1, 2, 3, 5, 9],
  [3, 4],
  [0, 1, 2],
  [8, 9],
  [0, 3, 7],
  [1, 4, 7] ]*/

/*
 * Complexity: What is the time complexity of the above functions?
 */


 /*

Graph = {
  nodes: [node1, ... , nodeN],
  someProp: whatever
}

node1 = {
  value: 5,
  edge : [node4, node7, nodeN]
}

Graph = {
  nodes: [node1,..., nodeN]
  Edges: [ [node1, node2], [node1, nodeN], [node2, node1] ]
}
 */

 // Edge Lists
 // point: If value at index 1 is smaller than value at index 0 don't add edge
/*  
[ [0,1], [0,6], [0,8], [1,4], [1,6], [1,9], [2,4], [2,6], [3,4], [3,5], [3,8], [4,5], [4,9], [7,8], [7,9] ]
 */


// Adjacency Matrix
// point: matrix[i][j]. Where i is index of startNode, and j is indext of endNode.
//matrix(n x n): n === nodes.length
/*
[ [0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 1, 0, 0] ]
*/