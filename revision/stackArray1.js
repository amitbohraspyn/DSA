class Stack {
  constructor() {
    this.data = [];
  }
  push(value) {
    this.data.push(value);
  }
  pop() {
    return this.data.pop();
  }
  peek() {
    console.log(this.data[this.data.length - 1]);
  }
}
