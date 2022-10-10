class DoublyLinkedList {
  constructor(value) {
    var newNode = {
      value: value,
      next: null,
      previous: null,
    };
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    var newNode = {
      value: value,
      next: null,
      previous: null,
    };
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    var newNode = {
      value: value,
      next: null,
      previous: null,
    };
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
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
  printReverseList() {
    var outList = [];
    var currentNode = this.tail;
    while (currentNode !== null) {
      outList.push(currentNode.value);
      currentNode = currentNode.previous;
    }
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
        previous: null,
      };
      var leaderNode = this.traverseNode(index - 1);
      var holdingPointer = leaderNode.next;
      newNode.next = holdingPointer;
      newNode.previous = leaderNode;
      leaderNode.next = newNode;
      this.length++;
    }
  }
  traverseNode(index) {
    console.log("this.legth", this.length);
    if (index >= this.length / 2) {
      var counter = 0;
      var currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    } else {
      var counter = this.length - 1;
      var currentNode = this.tail;
      while (counter !== index) {
        currentNode = currentNode.previous;
        counter--;
      }
      return currentNode;
    }
  }
  pop() {
    if (this.length >= 1) {
      var secondLastNode = this.tail.previous;
      secondLastNode.next = null;
      this.tail = secondLastNode;
      this.length--;
    } else {
      console.log("empty list");
    }
  }
  removeHead() {
    if (this.length >= 1) {
      var nextNode = this.head.next;
      nextNode.previous = null;
      this.head = nextNode;
      this.length--;
    } else {
      console.log("empty list");
    }
  }

  remove(index) {
    if (this.length >= 1) {
      if (index === 0) {
        this.removeHead();
      } else if (index >= this.length - 1) {
        this.pop();
      } else {
        var leaderNode = this.traverseNode(index - 1);
        var deleteNode = leaderNode.next;
        var secondNode = deleteNode.next;
        leaderNode.next = secondNode;
        secondNode.previous = leaderNode;
        this.length--;
      }
    } else {
      console.log("empty list");
    }
  }

  reverse(){
    if(this.head.next === null){
        return this.head;
    }else{
        var first = this.head;
        this.tail = this.head;
        var second = this.head.next;    
        while(second){
            var third = second.next;
            second.next = first;
            second = third;
            first = second;
        }
        this.head.next = null;
        this.head = first;
    }
  }
}

var myList = new DoublyLinkedList(10);
myList.append(20);
myList.prepend(30);
myList.prepend(50);
myList.insert(0, 100);
console.log("append", myList.printList());
myList.insert(2, 200);
console.log("myList", myList.printList());
myList.remove(5);
console.log("myList", myList.printList());
