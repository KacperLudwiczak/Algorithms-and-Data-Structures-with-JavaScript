class Node{
    constructor(val){ 
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){ // This function should accept a value
        var newNode = new Node(val); // Create a new node using the value passed to the function
        if(!this.head){ // If there is no head property on the list, set the head and tail to be the newly created node
            this.head = newNode;
            this.tail = this.head;
        } else { // Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++; // Increment the length by one
        return this; // Return the linked list
    }
    pop(){
        if(!this.head) return undefined; // If there are no nodes in the list, return undefined
        var current = this.head;
        var newTail = current;
        while(current.next){ // Loop through the list until you reach the tail
            newTail = current;
            current = current.next;
        }
        this.tail = newTail; // Set the tail to be the 2nd to last node
        this.tail.next = null; // Set the next property of the 2nd to last node to be null
        this.length--; // Decrement the length of the list by 1
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current; // Return the value of the node removed
    }
    shift(){
        if(!this.head) return undefined; // If there are no nodes, return undefined
        var currentHead = this.head; // Store the current head property in a variable
        this.head = currentHead.next; // Set the head property to be the current head's next property
        this.length--; // Decrement the length by 1
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead; // Return the value of the node removed
    }
    unshift(val){ // This function should accept a value
        var newNode = new Node(val); // Create a new node using the value passed to the function
        if(!this.head) { // If there is no head property on the list, set the head and tail to be the newly created node
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head; // Otherwise set the newly created node's next property to be the current head property on the list
        this.head = newNode; // Set the head property on the list to be that newly created node
        this.length++; // Increment the length of the list by 1
        return this; // Return the linked list
    }
    get(index){ // This function should accept an index
        if(index < 0 || index >= this.length) return null; // If the index is less than zero or greater than or equal to the length of the list, return null
        var counter = 0;
        var current = this.head;
        while(counter !== index){ // Loop through the list until you reach the index and return the node at that specific index
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val){ // This function should accept an index and a value
        var foundNode = this.get(index); // Use your get function to find the specific node.
        if(foundNode){ // If the node is found, set the value of that node to be the value passed to the function and return true
            foundNode.val = val;
            return true;
        }
        return false; // If the node is not found, return false
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false; // If the index is less than zero or greater than the length, return false
        if(index === this.length) return !!this.push(val); // If the index is the same as the length, push a new node to the end of the list
        if(index === 0) return !!this.unshift(val); // If the index is 0, unshift a new node to the start of the list
        
        var newNode = new Node(val);
        var prev = this.get(index - 1); // Otherwise, using the get method, access the node at the index - 1
        var temp = prev.next; 
        prev.next = newNode; // Set the next property on that node to be the new node
        newNode.next = temp; // Set the next property on the new node to be the previous next
        this.length++; // Increment the length
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined; // If the index is less than zero or greater than the length, return undefined
        if(index === 0) return this.shift(); // If the index is 0, shift
        if(index === this.length - 1) return this.pop(); // If the index is the same as the length-1, pop
       
        var previousNode = this.get(index - 1); // Otherwise, using the get method, access the node at the index - 1
        var removed = previousNode.next;
        previousNode.next = removed.next; // Set the next property on that node to be the next of the next node
        this.length--; // Decrement the length
        return removed; // Return the value of the node removed
    }
    reverse(){
      var node = this.head; // Create a variable called node and initialize it to the head property
      this.head = this.tail; // Swap the head and tail
      this.tail = node; 
      var next; // Create a variable called next
      var prev = null; // Create a variable called prev
      for(var i = 0; i < this.length; i++){ // Loop through the list
        next = node.next; // Set next to be the next property on whatever node is
        node.next = prev; // Set the next property on the node to be whatever prev is
        prev = node; // Set prev to be the value of the node variable
        node = next; // Set the node variable to be the value of the next variable
      }
      return this; // Once you have finished looping, return the list
    }
    print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}

var list = new SinglyLinkedList()

list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.push(999)








