class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    var newNode = new Node(value);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
      this.length = 1;
    } else {
      //a(first)(last)
      //a(first) -> b(last);
      //a(first) -> b -> c(last);
      //a(first) -> b -> c -> d(last);
      this.last.next = newNode;
      this.last = newNode;
      this.length++;
    }
  }
  dequeue() {
    if (this.length === 0) {
      console.log("Empty Queue");
      return null;
    } else {
      if (this.length === 1) {
        var holdingPointer = this.first;
        this.first = null;
        this.last = null;
        this.length = 0;
      } else {
        //a(first) -> b -> c -> d(last);
        //b(first) -> c -> d(last);
        //c(first) -> d(last);
        //d(first)(last)
        var holdingPointer = this.first;
        this.first = this.first.next;
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