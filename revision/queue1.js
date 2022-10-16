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

  enqueue(value) {
    var node = new Node(value);
    if (this.length === 0) {
      this.first = node;
      this.last = node;
      this.length = 1;
    } else {
      this.last.next = node;
      this.last = node;
      this.length++;
    }
  }

  dequeue() {
    if (this.length === 0) {
      console.log("Empty Queue");
      return null;
    } else {
      if (this.length === 1) {
        var value = this.first.value;
        this.first = null;
        this.last = null;
        this.length = 0;
        return value;
      } else {
        var value = this.first.value;
        this.first = this.first.next;
        this.length--;
        return value;
      }
    }
  }

  peek() {
    if (this.length > 0) {
      return this.first.value;
    } else {
      console.log("Empty queue");
    }
  }
}


var myQueue = new Queue();

myQueue.enqueue(10);
console.log(myQueue);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.enqueue(40);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue);