class Dictionary {
  constructor(size) {
    this.size = size;
    this.data = new Array(size);
  }
  _hash(key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.size;
    }
    return hash;
  }
  set(key, value) {
    var hash = this._hash(key);
    if (this.data !== undefined) {
      this.data[hash] = [[key, value]];
    } else {
      this.data[hash].push([key, value]);
    }
  }

  get(key) {
    var hash = this._hash(key);
    if (this.data === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < this.data[hash].length; i++) {
        if (this.data[hash][i][0] === key) {
          return this.data[hash][i][1];
        }
      }
    }
  }
  keys(){
    var outList = [];
    for(var i=0; i< this.size; i++){
      if(this.data[i] !== undefined){
        outList.push(this.data[i][0][0])
      }
    }
    return outList;
  }
}


var dict = new Dictionary(500);
dict.set("name", "amit");
dict.set("name", 'ballu');
dict.set("age", 24);
console.log("dicty", dict);
console.log("dict", dict.get("name"));
console.log("keys", dict.keys());
