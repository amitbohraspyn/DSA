class LinkedList {
  constructor(value) {
    var newNode = {
      value: value,
      next: null,
    };
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  prepend(value) {
    var newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  append(value) {
    var newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  printList() {
    var outList = [];
    var currentNode = this.head;
    while (currentNode !== null) {
      outList.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log("==========================================");
    console.log("this.length ", this.length);
    console.log("this.head ", this.head);
    console.log("this.tail ", this.tail);
    return outList;
  }
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
    } else if (index >= this.length) {
      this.append(value);
    } else {
      var newNode = {
        value: value,
        next: null,
      };
      var leaderNode = this.traverseNode(index - 1);
      var holdingPointer = leaderNode.next;
      leaderNode.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
    }
  }
  traverseNode(index) {
    var counter = 0;
    var currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  removeHead() {
    if (this.length >= 1) {
      var holdingPointer = this.head.next;
      this.head = holdingPointer;
      this.length--;
    } else {
      console.log("emptyList");
    }
  }
  remove(index) {
    if (index === 0) {
      this.removeHead();
    }
    if (index >= this.length) {
      index = this.length - 1;
    }
    var leaderNode = this.traverseNode(index - 1);
    var pointerHolding = leaderNode.next;
    leaderNode.next = pointerHolding.next;
    this.length--;
  }
}

const myList = new LinkedList(10);
myList.append(20);
myList.prepend(30);
console.log("append", myList.printList());
myList.prepend(50);
myList.insert(0, 100);
myList.insert(2, 200);
console.log("myList", myList.printList());
myList.remove(5);
console.log("myList", myList.printList());
