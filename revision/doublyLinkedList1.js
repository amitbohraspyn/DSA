class DoublyLinkedList {
  constructor(value) {
    this.addValueToEmpty(value);
  }

  addValueToEmpty(value) {
    var node = {
      value: value,
      next: null,
      prev: null,
    };
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  append(value) {
    if (this.length === 0) {
      this.addValueToEmpty(value);
    } else {
      var newNode = {
        value: value,
        next: null,
        prev: null,
      };
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  prepend(value) {
    if (this.length === 0) {
      this.addValueToEmpty(value);
    } else {
      var newNode = {
        value: value,
        next: null,
        prev: null,
      };
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  }

  insert(index, value) {
    if (this.length === 0) {
      this.addValueToEmpty(value);
    } else {
      if (index === 0) {
        this.prepend(value);
      } else if (index >= this.length) {
        this.append(value);
      } else {
        var newNode = {
          value: value,
          next: null,
          prev: null,
        };
        var leaderNode = this.traverseNode(index - 1);
        var followerNode = leaderNode.next;
        newNode.prev = leaderNode;
        newNode.next = followerNode;
        followerNode.prev = newNode;
        leaderNode.next = newNode;
        this.length++;
      }
    }
  }

  traverseNode(index) {
    if (index <= this.length / 2) {
      var counter = 0;
      var currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      var counter = this.length - 1;
      var currentNode = this.tail;
      while (counter !== index) {
        currentNode = currentNode.prev;
        counter--;
      }
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

  printReverseList() {
    var outList = [];
    var currentNode = this.tail;
    while (currentNode) {
      outList.push(currentNode.value);
      currentNode = currentNode.prev;
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
      return null;
    } else {
      if (this.length === 1) {
        var value = this.head.value;
        this.emptyList();
        return value;
      } else {
        var value = this.head.value;
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
        return value;
      }
    }
  }

  pop() {
    if (this.length === 0) {
      console.log("Empty list");
      return null;
    } else {
      if (this.length === 1) {
        var value = this.head.value;
        this.emptyList();
        return value;
      } else {
        var value = this.tail.value;
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length--;
        return value;
      }
    }
  }

  remove(index) {
    if (this.length === 0) {
      console.log("Empty List");
      return null;
    } else {
      if (index <= 0) {
        var value = this.removeHead();
      } else if (index >= this.length - 1) {
        var value = this.pop();
      } else {
        var leaderNode = this.traverseNode(index - 1);
        var followerNode = leaderNode.next;
        var thirdNode = followerNode.next;
        leaderNode.next = thirdNode;
        thirdNode.prev = leaderNode;
        this.length--;
        var value = followerNode.value;
      }
      return value;
    }
  }

  reverse() {
    if (this.length <= 1) {
      return this.head;
    } else {
      var first = this.head;
      var second = first.next;
      while (second) {
        var temp = second.next;
        second.next = first;
        first.prev = second;
        first = second;
        second = temp;
      }
      this.head.next = null;
      this.tail = this.head;
      first.prev = null;
      this.head = first;
      return this.head;
    }
  }
}

var myList = new DoublyLinkedList(10);
console.log("myList 1", myList);
myList.append(50);
console.log("myList 2", myList);
myList.prepend(5);
console.log("myList 3", myList);
myList.printList();
// myList.printReverseList();
myList.insert(0, 100);
console.log("myList 4", myList);
myList.printList();
myList.insert(4, 500);
console.log("myList 5", myList);
myList.printList();
myList.insert(2, 55.0);
console.log("myList 6", myList);
myList.printList();
myList.removeHead();
console.log("myList 7", myList);
myList.printList();
myList.pop();
console.log("myList 8", myList);
myList.printList();
myList.remove(2);
console.log("myList 9", myList);
myList.printList();
myList.remove(1);
console.log("myList 10", myList);
myList.printList();
myList.reverse();
console.log("myList 11", myList);
myList.printList();
