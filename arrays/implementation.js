class list {
  constructor(value) {
    this.data = {
      0: value,
    };
    this.length = 1;
  }
  append(value) {
    this.data[this.length] = value;
    this.length++;
  }
  pop() {
    if (this.data === null || this.length === 0) {
      console.log("Empty List");
    } else {
      delete this.data[this.length - 1];
      this.length--;
    }
  }
  get(index) {
    if (index >= this.length || index < 0) {
      console.log("Range out of Index");
      return null;
    } else {
      return this.data[index];
    }
  }
  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
    } else {
      if (index < 0) {
        index = 0;
      }
      for (var counter = this.length - 1; counter >= index; counter--) {
        this.data[counter + 1] = this.data[counter];
      }
      this.data[index] = value;
      this.length++;
    }
  }
  remove(index) {
    if (index >= this.length || index < 0) {
      console.log("Index out of Range");
    } else {
      for (var counter = index; counter < this.length; counter++) {
        console.log(
          "counter",
          counter,
          this.data,
          this.data[counter],
          this.data[counter + 1]
        );
        this.data[counter] = this.data[counter + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
    }
  }
}

var myList = new list(10);
myList.append(100);
console.log(myList);
myList.insert(0, 500);
myList.insert(2, 22);
console.log(myList);
myList.remove(3);
console.log(myList);
