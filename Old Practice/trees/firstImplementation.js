class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      var currentNode = this.root;
      while (true) {
        if (newNode.value <= currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            break;
          }
          currentNode = currentNode.left;
        } else {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            break;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  //   lookup(value) {
  //     if (this.root === null) {
  //       console.log("Empty Tree");
  //       return null;
  //     } else {
  //       var currentNode = this.root;
  //       while (true) {
  //         if (value === currentNode.value) {
  //           return currentNode;
  //         } else if (value <= currentNode.value) {
  //           if (currentNode.left === null) {
  //             console.log("Not available");
  //             return null;
  //           } else if (currentNode.left.value === value) {
  //             return currentNode.left;
  //           } else {
  //             currentNode = currentNode.left;
  //           }
  //         } else {
  //           if (currentNode.right === null) {
  //             console.log("Not available");
  //             return null;
  //           } else if (currentNode.right.value === value) {
  //             return currentNode.right;
  //           } else {
  //             currentNode = currentNode.right;
  //           }
  //         }
  //       }
  //     }
  //   }

  lookup(value) {
    if (this.root === null) {
      console.log("Empty Tree");
      return null;
    } else {
      var currentNode = this.root;
      while (currentNode) {
        if (value === currentNode.value) {
          console.log("Matched ");
          return currentNode;
        } else if (value <= currentNode.value) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }
      console.log("Not found");
      return null;
    }
  }

  assign(pNode, cNode, value) {
    if (pNode === null) {
      this.root.value = value;
      return this.root;
    } else {
      if (cNode.value <= pNode.value) {
        pNode.left = value;
      } else {
        pNode.right = value;
      }
      return this.root;
    }
  }

  remove(value) {
    if (this.root.value === null) {
      console.log("Empty Tree");
      return null;
    } else {
      var currentNode = this.root;
      var parentNode = null;
      while (true) {
        if (currentNode === null) {
          console.log("Not Found");
          return this.root;
        }
        if (value === currentNode.value) {
          if (currentNode.left === null && currentNode.right === null) {
            return this.assign(parentNode, currentNode, null);
          } else if (
            (currentNode.left === null && currentNode.right !== null) ||
            (currentNode.right !== null && currentNode.right.left === null)
          ) {
            return this.assign(parentNode, currentNode, currentNode.right);
          } else if (currentNode.left !== null && currentNode.right === null) {
            return this.assign(parentNode, currentNode, currentNode.left);
          } else {
            var leftParentNode = currentNode.right;
            var leftNode = currentNode.right.left;
            while (leftNode.left !== null) {
              leftParentNode = leftNode;
              leftNode = leftNode.left;
            }
            if (currentNode.value <= parentNode.value) {
              parentNode.left.value = leftNode.value;
              return this.assign(leftParentNode, leftNode, null);
            } else {
              parentNode.right.value = leftNode.value;
              return this.assign(leftParentNode, leftNode, null);
            }
          }
        } else if (value <= currentNode.value) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(traverse(tree.root)));

console.log(tree.lookup(15));
console.log(tree.lookup(7));

console.log(tree.remove(20));
console.log(JSON.stringify(traverse(tree.root)));
