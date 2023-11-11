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
  peep() {
    if (this.top !== null) {
      return this.top.value;
    }
    return this.top;
  }
  push(value) {
    var newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      //a(head) -> b(tail)
      //c(head) -> a -> b(tail)
      //d(head) -> c -> a -> b(tail)
      //Just remember the last node only a single pointer doesn't change
      this.bottom = newNode;
    } else {
      //Prepend in the linkedlist
      //a(head) -> b(tail)
      //c(head) -> a -> b(tail)
      //d(head) -> c -> a -> b(tail)
      //head and tails are just pointers
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.top === null) {
      console.log("Empty Stack");
      return null;
    } else {
      if (this.top === this.bottom) {
        var holdingPointer = this.top;
        this.top = null;
        this.bottom = null;
        this.length = 0;
      } else {
        var holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
      }
      return holdingPointer;
    }
  }

  isEmpty() {
    return this.length === 0;
  }

  length() {
    return this.length;
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
