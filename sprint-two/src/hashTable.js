var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit); // {} << get set and each [] <<
  this.count = 0;
};

HashTable.prototype.insert = function(k, v){
  this.count++;
  
  if ( (this.count / this._limit) >= 0.75) {
    this._limit *= 2; // here
    //resize
    this.resize(this._limit);
  }

  //locked in
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
  var bucket = this._storage.get(index);
  for(var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  return null
};

HashTable.prototype.remove = function(k){
  this.count--;

  if ( this._limit > 8 && (this.count / this._limit) <= 0.25) {
    this._limit *= 0.5; // here
    //resize
    this.resize(this._limit);
  }

  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for(var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i);
    }
  }

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

  }

};


// Access storage and check with each.

// for each of array check k 

// if k then retrive

// return k if exists


  // limitedArray.each = function(callback){
  //   for(var i = 0; i < storage.length; i++){
  //     callback(storage[i], i, storage);
  //   }


/*
 * Complexity: What is the time complexity of the above functions?
 */


//var hashtable = new HashTable();
//hashtable._storage;


// x = []
// func that inset array into x resulting [[k,v]]
// if [[k,v]] that func [ [[k1,v1], [k2,v2]]] 

// index = getIndexBelowMaxforKey();
// [ [],                              8 array  ] <<<
// [] @ 0

// [ [k1, v1]  ]  //0
 
// index =getIndexBelowMaxforKey()
// index = 0
// [ [k1, v1], [k2, v2] ]  // 0

// retrieve
// [ [ [v1, v1], [v2, v2] ]    0  ]                             8 array             ] 

//returned by retrieve
//[ [v1, v1], [v2, v2] ] << 1000
// v1  ^^^^

