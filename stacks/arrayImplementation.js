class Stack {
  constructor() {
    this.data = [];
  }
  peep() {
    return this.data[this.data.length - 1];
  }
  push(value) {
    this.data.push(value);
    return this;
  }
  pop() {
    if (this.data.length !== 0) {
      value = this.data.pop();
      return value;
    } else {
      return null;
    }
  }
  isEmpty() {
    return this.data.length === 0;
  }
  length() {
    return this.length;
  }
}
