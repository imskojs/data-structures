var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(node){ //O(1)
  this.nodes[node] = {};
};

Graph.prototype.contains = function(node){ //O(1)
  return !!this.nodes[node];
};

Graph.prototype.removeNode = function(node){ //O(1)
  var edges = this.nodes[node];
  _.each(edges, function (edge, key, bucket){
    delete this.nodes[key][node];
  })
  delete this.nodes[node];

};


Graph.prototype.hasEdge = function(fromNode, toNode){ //O(1)
  return !!this.nodes[fromNode][toNode];
};

Graph.prototype.addEdge = function(fromNode, toNode){ //O(1)
  this.nodes[fromNode][toNode] = true;
  this.nodes[toNode][fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){ //O(1
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
};

Graph.prototype.forEachNode = function(cb){ //O(cb)
  _.each(this.nodes, function(val, key){
    cb(key);
  })
};
