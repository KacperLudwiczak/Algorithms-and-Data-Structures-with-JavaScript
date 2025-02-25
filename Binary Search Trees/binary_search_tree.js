class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value); // Create a new node
        if(this.root === null){ // Check if there is a root, if not - the root now becomes that new node!
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){ // If there is a root, check if the value of the new node is greater than or less than the value of the root
            if(value === current.value) return undefined;
            if(value < current.value){ // If it is less
                if(current.left === null){ // Check to see if there is a node to the left
                    current.left = newNode; // If there is not, add that node as the left property
                    return this;
                }
                current = current.left; // If there is, move to that node and repeat these steps
            } else { // If it is greater 
                if(current.right === null){ // Check to see if there is a node to the right
                    current.right = newNode; // If there is not, add that node as the right property
                    return this;
                } 
                current = current.right; // If there is, move to that node and repeat these steps
            }
        }
    }
    find(value){
        if(this.root === null) return false; // Check if there is a root, if not - we're done searching!
        var current = this.root,
            found = false;
        while(current && !found){ // If not, check to see if the value is greater than or less than the value of the root
            if(value < current.value){ // If it is less. Check to see if there is a node to the left
                current = current.left; // If there is, move to that node and repeat these steps
            } else if(value > current.value){ // If it is greater. Check to see if there is a node to the right
                current = current.right; // If there is, move to that node and repeat these steps
            } else {
                found = true; // If there is not, we're done searching!
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    remove(value) {
        this.root = this._removeNode(this.root, value);
    } 
    _removeNode(node, value) {
        if (node === null) return null;
    
        if (value < node.value) {
          node.left = this._removeNode(node.left, value);
          return node;
        } else if (value > node.value) {
          node.right = this._removeNode(node.right, value);
          return node;
        } else {
          // Case 1: No child
          if (node.left === null && node.right === null) {
            return null;
          }
          // Case 2: One child
          if (node.left === null) {
            return node.right;
          }
          if (node.right === null) {
            return node.left;
          }
          // Case 3: Two children
          let minRight = this._findMin(node.right);
          node.value = minRight.value;
          node.right = this._removeNode(node.right, minRight.value);
          return node;
        }
    }
    _findMin(node) {
        while (node.left !== null) {
          node = node.left;
        }
        return node;
    }
    findSecondLargest() {
        if (!this.root || (!this.root.left && !this.root.right)) {
          return undefined;
        }
    
        let current = this.root;
        let parent = null;
    
        while (current.right) {
          parent = current;
          current = current.right;
        }
    
        if (current.left) {
          return this._findMax(current.left).value;
        }
        
        return parent.value;
    }
    _findMax(node) {
        while (node.right !== null) {
          node = node.right;
        }
        return node;
    }
    isBalanced() {
        function checkHeight(node) {
          if (node === null) return 0;
          
          let leftHeight = checkHeight(node.left);
          if (leftHeight === -1) return -1;
          
          let rightHeight = checkHeight(node.right);
          if (rightHeight === -1) return -1;
          
          if (Math.abs(leftHeight - rightHeight) > 1) return -1;
          
          return Math.max(leftHeight, rightHeight) + 1;
        }
        
        return checkHeight(this.root) !== -1;
    }
}


//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)




