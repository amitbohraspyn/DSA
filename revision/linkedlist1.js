class LinkedList {
  constructor(value) {
    this.addValueToEmpty(value);
  }
  addValueToEmpty(value) {
    var newNode = {
      value: value,
      next: null,
    };
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  prepend(value) {
    if (this.length === 0) {
      this.addValueToEmpty(value);
    } else {
      var newNode = {
        value: value,
        next: null,
      };
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  }
  append(value) {
    if (this.length === 0) {
      this.addValueToEmpty(value);
    } else {
      var newNode = {
        value: value,
        next: null,
      };
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
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
      var followerNode = leaderNode.next;
      leaderNode.next = newNode;
      newNode.next = followerNode;
      this.length++;
    }
  }

  traverseNode(index) {
    var counter = 0;
    var currentNode = this.head;
    while (index !== counter) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  printList() {
    var outList = [];
    var currentNode = this.head;
    while (currentNode) {
      outList.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(outList);
  }
  emptyList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  removeHead() {
    if (this.length === 0) {
      console.log("Empty List");
    } else {
      if (this.length === 1) {
        this.emptyList();
      } else {
        this.head = this.head.next;
        this.length--;
      }
    }
  }
  remove(index) {
    if (this.length === 0) {
      console.log("Empty List");
    } else {
      if (this.length === 1 || index === 0) {
        this.removeHead();
      } else {
        if (index >= this.length) {
          index = this.length - 1;
        }
        var leaderNode = this.traverseNode(index - 1);
        var followerNode = leaderNode.next;
        leaderNode.next = followerNode.next;
        this.length--;
        if (index === this.length - 1) {
          this.tail = leaderNode;
        }
      }
    }
  }

  isEmpty() {
    return this.length === 0;
  }

  length() {
    return this.length;
  }

  reverse() {
    if (this.length <= 1) {
      return this.head;
    }
    var first = this.head;
    var second = first.next;
    while (second) {
      var temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.tail = this.head;
    this.head = first;
  }
}

var myList = new LinkedList(10);
console.log("myList1 ", myList);
myList.append(20);
console.log("myList2 ", myList);
myList.prepend(50);
console.log("myList3 ", myList);
myList.printList();
myList.removeHead();
myList.removeHead();
myList.removeHead();
myList.removeHead();
myList.removeHead();
console.log("myList4 ", myList);
myList.printList();
myList.insert(2, 100);
myList.insert(2, 200);
myList.insert(2, 300);
myList.insert(2, 400);
myList.printList();
console.log("mylist 5", myList);
myList.remove(9);
myList.reverse();
myList.printList();
console.log("myList 6", myList);
myList.remove(2);
myList.printList();
console.log("myList 7", myList);
myList.remove(0);
myList.printList();
console.log("myList 8", myList);
myList.remove(0);
myList.printList();
console.log("myList 8", myList);
