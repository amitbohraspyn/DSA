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
    if (this.length === 0) {
      console.log("Empty List");
    }
    var item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  length() {
    return this.length;
  }

  insert(index, value) {
    if (index < 0) {
      index = 0;
    } else if (index >= this.length) {
      index = this.length - 1;
    }
    for (var i = this.length - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[index] = value;
    this.length++;
  }

  remove(index) {
    if (this.length === 0) {
      console.log("Empty List");
    } else {
      if (index < 0) {
        index = 0;
      } else if (index >= this.length) {
        index = this.length - 1;
      }
      while (this.data[index + 1] !== undefined) {
        this.data[index] = this.data[index + 1];
        index++;
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
