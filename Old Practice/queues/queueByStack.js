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

  peek() {
    return this.top;
  }
}

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(value) {
    this.stack1.push(value);
    while (this.stack1.length !== 0) {
      var value = this.stack1.pop();
      this.stack2.push(value);
    }
  }
  dequeue() {
    if (this.stack2.length === 0) {
      console.log("Empty Queue");
      return null;
    } else {
      var value = this.stack2.pop();
      return value;
    }
  }
}

var myQueue = new Queue();

myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.enqueue(40);
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue);
