class LinkedList {
  constructor(value) {
    this.addToEmptyList(value);
  }

  addToEmptyList(value) {
    var newNode = {
      value: value,
      next: null,
    };
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    if (this.length === 0) {
      this.addToEmptyList(value);
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

  prepend(value) {
    if (this.length === 0) {
      this.addToEmptyList(value);
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

  printList() {
    var outList = [];
    var currentNode = this.head;
    while (currentNode) {
      outList.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(outList);
  }

  removeHead() {
    if (this.length > 1) {
      var secondItem = this.head.next;
      this.head = secondItem;
      this.length--;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      console.log("Empty List");
    }
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
    } else if (index <= 0) {
      this.prepend(value);
    } else {
      var newNode = {
        value: value,
        next: null,
      };
      var leaderNode = this.traverseNode(index - 1);
      var followerNode = leaderNode.next;
      newNode.next = followerNode;
      leaderNode.next = newNode;
      this.length++;
    }
  }

  remove(index) {
    if (this.length === 0) {
      console.log("Empty List");
    } else {
      if (index === 0) {
        this.removeHead();
      } else {
        if (index >= this.length - 1) {
          index = this.length - 1;
          var leaderNode = this.traverseNode(index - 1);
          var followerNode = leaderNode.next;
          leaderNode.next = followerNode.next;
          this.tail = leaderNode;
        } else {
          var leaderNode = this.traverseNode(index - 1);
          var followerNode = leaderNode.next;
          leaderNode.next = followerNode.next;
        }
        this.length--;
      }
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

  reverse() {
    if (this.length <= 1) {
      return this.head;
    } else {
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
