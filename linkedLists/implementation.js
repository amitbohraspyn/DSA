class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    // var newNode = new Node(value);
    var newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    // var newNode = new Node(value);
    var newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  printList() {
    var array = [];
    var currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    // console.log("this.head ", this.head);
    // console.log("this.tail ", this.tail);
    return array;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
    } else if (index === 0) {
      this.prepend(value);
    } else {
      var newNode = {
        value: value,
        next: null,
      };
      var leaderNode = this.traverseToIndex(index - 1);
      var holdingPointer = leaderNode.next;
      leaderNode.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
    }
  }

  traverseToIndex(index) {
    var counter = 0;
    var currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  removeHead() {
    var holdingHead = this.head.next;
    this.head = holdingHead;
    this.length--;
  }

  remove(index) {
    if (index >= this.length) {
      index = this.length - 1;
    }
    if (index === 0) {
      this.removeHead();
    } else {
      var leaderNode = this.traverseToIndex(index - 1);
      var holdingPointer = leaderNode.next;
      leaderNode.next = holdingPointer.next;
      if (index === this.length - 1) {
        this.tail = leaderNode;
      }
      this.length--;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const myList = new LinkedList(10);
myList.append(20);
myList.prepend(30);
myList.prepend(50);
myList.insert(0, 100);
myList.insert(2, 200);
console.log("myList", myList.printList());
myList.remove(5);
console.log("myList", myList.printList());
