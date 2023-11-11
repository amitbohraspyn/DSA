class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    var node = new Node(value);
    if (this.length === 0) {
      this.top = node;
      this.bottom = node;
      this.length = 1;
    } else {
      node.next = this.top;
      this.top = node;
      this.length++;
    }
  }

  pop() {
    if (this.length === 0) {
        console.log("Empty Stack");
      return null;
    } else if (this.length === 1) {
      var value = this.top.value;
      this.top = null;
      this.bottom = null;
      this.length = 0;
      return value;
    } else {
      var value = this.top.value;
      this.top = this.top.next;
      this.length--;
      return value;
    }
  }

  peek(){
    return this.top.value;
  }
}


var myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
console.log("myStack 1", myStack);
myStack.pop();
myStack.pop();
console.log(myStack.pop());
myStack.pop();
console.log("myStack2 ", myStack);