class DoublyLinkedList {
  constructor(value) {
    this.addElementToEmpty(value);
  }
  addElementToEmpty(value) {
    var newNode = {
      value: value,
      next: null,
      prev: null,
    };
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    if (this.length === 0) {
      this.addElementToEmpty(value);
    } else {
      var newNode = {
        value: value,
        next: null,
        prev: null,
      };
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  prepend(value) {
    if (this.length === 0) {
      this.addElementToEmpty(value);
    } else {
      var newNode = {
        value: value,
        next: null,
        prev: null,
      };
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }
  printList() {
    var outList = [];
    var currentNode = this.head;
    while (currentNode) {
      outList.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log("---------> ", outList);
  }
  printReverseList() {
    var outList = [];
    var currentNode = this.tail;
    while (currentNode) {
      outList.push(currentNode.value);
      currentNode = currentNode.prev;
    }
    console.log("<--------- ", outList);
  }
  insert(index, value) {
    if (this.length === 0) {
      this.addElementToEmpty(value);
    } else {
      if (index <= 0) {
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
        leaderNode.next = newNode;
        followerNode.prev = newNode;
        this.length++;
      }
    }
  }
  traverseNode(index) {
    if (index <= this.length / 2) {
      var counter = 0;
      var currentNode = this.head;
      while (index !== counter) {
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      var currentNode = this.tail;
      while (index !== counter) {
        currentNode = currentNode.prev;
        counter--;
      }
    }
    return currentNode;
  }
  removeHead() {
    if (this.length === 0) {
      console.log("Empty List");
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      var secondItem = this.head.next;
      secondItem.prev = null;
      this.head = secondItem;
      this.length--;
    }
  }
  pop() {
    if (this.length === 0) {
      console.log("Empty List");
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      var secondLastItem = this.tail.prev;
      secondLastItem.next = null;
      this.tail = secondLastItem;
      this.length--;
    }
  }

  remove(index) {
    if (this.length === 0) {
      console.log("Empty List");
    } else {
      if (index <= 0) {
        this.removeHead();
      } else if (index >= this.length - 1) {
        this.pop();
      } else {
        var leaderNode = this.traverseNode(index - 1);
        var followerNode = leaderNode.next;
        var pointerHolding = followerNode.next;
        leaderNode.next = pointerHolding;
        pointerHolding.prev = leaderNode;
        this.length--;
      }
    }
  }

  reverse(){
    if(this.length <= 1){
        return this.head;
    }else{
        var first = this.head;
        var second = first.next;
        this.head.prev = second;
        while(second !== null){
            var third = second.next;
            second.next = first;
            second.prev = third;
            first = second;
            second = third;
        }
        this.head.next = null;
        this.tail = this.head;
        this.head = first;
        this.head.prev = null;
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

