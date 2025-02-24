class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){ // The function should accept a value
        var newNode = new Node(val); // Create a new node with that value
        if(!this.first){ // If there are no nodes in the stack, set the first and last property to be the newly created node 
            this.first = newNode;
            this.last = newNode;
        } else { // If there is at least one node, create a variable that stores the current first property on the stack
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size; // Increment the size of the stack by 1
    }
    pop(){
        if(!this.first) return null; // If there are no nodes in the stack, return null
        var temp = this.first; // Create a temporary variable to store the first property on the stack
        if(this.first === this.last){ // If there is only 1 node, set the first and last property to be null
            this.last = null;
        }
        this.first = this.first.next; // If there is more than one node, set the first property to be the next property on the current first
        this.size--; // Decrement the size by 1
        return temp.value; // Return the value of the node removed
    }
}