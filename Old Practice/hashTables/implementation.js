class Dictionary {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    var hash = this._hash(key);
    this.data[hash] = [key, value];
  }
  get(key) {
    var hash = this._hash(key);
    if (this.data[hash] === null) {
      return "KeyError";
    } else {
      return this.data[hash][1];
    }
  }
  keys(){
    var outList = [];
    for (var i = 0 ; i< this.data.length; i++){
        if(this.data[i] !== undefined){
            outList.push(this.data[i][0])
        }
    }
    return outList;
  }
}

var dict = new Dictionary(500);
dict.set("name", "amit");
dict.set("name", 'ballu');

dict.set("age", 24);
console.log("dict", dict.get("name"));
console.log("keys", dict.keys());

