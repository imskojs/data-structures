var HashTable = function(){

  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.count = 0;

};

HashTable.prototype.insert = function(k, v){
  this.count++;

  if ( (this.count / this._limit) >= 0.75) {
    this._limit *= 2;
    this.resize(this._limit);
  }

  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var found = false;

  if (bucket === undefined) {
    this._storage.set(i, []);
    bucket.push([k,v]);
  } else {
    for(var j = 0; j < bucket.length; j++){
      var tuple = bucket[j]
      if(tuple[0] === k){
        found = true;
        tuple[1] = v;
        break;
      }
    }
  }

  if (!found) {
    bucket.push([k,v])
  };
};


HashTable.prototype.insert = function(k, v){
  this.count++;
  if ( (this.count / this._limit) >= 0.75) {
    this._limit *= 2;
    this.resize(this._limit);
  }
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket === undefined) {
    this._storage.set(i, [[k, v]]);
  } else {
    bucket.push([k,v]);
  }
};


HashTable.prototype.retrieve = function(k){

  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

  for(var i = 0; i < bucket.length; i++) {

    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }

  return null;
};

HashTable.prototype.remove = function(k){

  this.count--;

  if ( this._limit > 8 && (this.count / this._limit) <= 0.25) {
    this._limit *= 0.5;
    this.resize(this._limit);
  }

  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  for(var i = 0; i < bucket.length; i++) {
    
    if (bucket[i][0] === k) {
      bucket.splice(i);
    }
  }
};

HashTable.prototype.resize = function (limit) {

  var newLimitedArray = LimitedArray(limit);
  var oldStorage = [];

  this._storage.each(function (bucket, i, storage){
    oldStorage.push(bucket);
  });

  this._storage = newLimitedArray;
  this.count = 0;

  for(var i = 0; i < oldStorage.length; i++){

    if(oldStorage[i] !== undefined){
      for(var j = 0; j < oldStorage[i].length; j++){
        var key = oldStorage[i][j][0];
        var val = oldStorage[i][j][1];
        this.insert(key, val);
      }
    }
  }

  delete oldStorage;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */