class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val); // Create a new node with the value passed to the function
        if(this.length === 0){ // If the head property is null set the head and tail to be the newly created node 
            this.head = newNode;
            this.tail = newNode;
        } else { 
            this.tail.next = newNode; // If not, set the next property on the tail to be that node
            newNode.prev = this.tail; // Set the previous property on the newly created node to be the tail
            this.tail = newNode; // Set the tail to be the newly created node
        }
        this.length++; // Increment the length
        return this; // Return the Doubly Linked List
    } 
    pop(){
        if(!this.head) return undefined; // If there is no head, return undefined
        var poppedNode = this.tail; // Store the current tail in a variable to return later
        if(this.length === 1){ // If the length is 1, set the head and tail to be null
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev; // Update the tail to be the previous Node.
            this.tail.next = null; // Set the newTail's next to null
            poppedNode.prev = null;
        }
        this.length--; // Decrement the length
        return poppedNode; // Return the value removed
    }
    shift(){
        if(this.length === 0) return undefined; // If length is 0, return undefined
        var oldHead = this.head; // Store the current head property in a variable (we'll call it old head)
        if(this.length === 1){ // If the length is one
            this.head = null; // Set the head to be null
            this.tail = null; // Set the tail to be null
        }else{
            this.head = oldHead.next; // Update the head to be the next of the old head
            this.head.prev = null; // Set the head's prev property to null
            oldHead.next = null; // Set the old head's next to null
        }
        this.length--; // Decrement the length
        return oldHead; // Return old head
    }
    unshift(val){
        var newNode = new Node(val); // Create a new node with the value passed to the function
        if(this.length === 0) { // If the length is 0
            this.head = newNode; // Set the head to be the new node
            this.tail = newNode; // Set the tail to be the new node
        } else {
            this.head.prev = newNode; // Set the prev property on the head of the list to be the new node
            newNode.next = this.head; // Set the next property on the new node to be the head property
            this.head = newNode; // Update the head to be the new node
        }
        this.length++; // Increment the length
        return this; // Return the list
    }
    get(index){
        if(index < 0 || index >= this.length) return null; // If the index is less than 0 or greater or equal to the length, return null
        var count, current;
        if(index <= this.length/2){ // If the index is less than or equal to half the length of the list
            count = 0;
            current = this.head;
            while(count !== index){ // Loop through the list starting from the head and loop towards the middle
                current = current.next;
                count++;
            }
        } else { // If the index is greater than half the length of the list
            count = this.length - 1;
            current = this.tail;
            while(count !== index){ //  ​Loop through the list starting from the tail and loop towards the middle
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index); // Create a variable which is the result of the get method at the index passed to the function
        if(foundNode != null){
            foundNode.val = val; // If the get method returns a valid node, set the value of that node to be the value passed to the function
            return true; // Return true
        }
        return false; // Otherwise, return false
    }
    // Second set method version
    set_v2(index, val){
        if(index < 0 || index >= this.length) return false;
        
        let current = this.head;
        let count = 0;
        while(count < index){
            current = current.next;
            count++;
        }
        current.val = val;
        return true;
    }    
    insert(index, val){
        if(index < 0 || index > this.length) return false; // If the index is less than zero or greater than or equal to the length return false
        if(index === 0) return !!this.unshift(val); // If the index is 0, unshift
        if(index === this.length) return !!this.push(val); // If the index is the same as the length, push

        var newNode = new Node(val);
        var beforeNode = this.get(index-1); // Use the get method to access the index -1
        var afterNode = beforeNode.next; // Set the next and prev properties on the correct nodes to link everything together
        
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++; // Increment the length 
        return true; // Return true
    }
    // Second insert method version
    insert_v2(index, val) {
        // If index is invalid, return false
        if(index < 0 || index > this.length) return false;
        
        // Create the new node to be inserted
        const newNode = new Node(val);
        
        // Inserting at the beginning of the list
        if(index === 0) {
            if(this.length === 0) {
                // When the list is empty, both head and tail become the new node
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.next = this.head;
                this.head.prev = newNode;
                this.head = newNode;
            }
            this.length++;
            return true;
        }
        
        // Inserting at the end of the list
        if(index === this.length) {
            // Re-use the push method to insert at the end
            this.push(val);
            return true;
        }
        
        // Inserting somewhere in the middle
        // Traverse the list to find the node currently at the given index
        let current = this.head;
        for(let i = 0; i < index; i++){
            current = current.next;
        }
        
        // At this point, current is the node that will come after the new node.
        let prevNode = current.prev;
        
        // Re-wire pointers to insert the new node between prevNode and current
        newNode.prev = prevNode;
        newNode.next = current;
        prevNode.next = newNode;
        current.prev = newNode;
        
        // Increment the length of the list
        this.length++;
        return true;
    }    
    remove(index){
        if(index < 0 || index >= this.length) return undefined; // If the index is less than zero or greater than or equal to the length return undefined
        if(index === 0) return this.shift(); // If the index is 0, shift
        if(index === this.length - 1) return this.pop(); // If the index is the same as the length-1, pop
        var removedNode = this.get(index); // Use the get method to retrieve the item to be removed
        var beforeNode = removedNode.prev; // Update the next and prev properties to remove the found node from the list
        var afterNode = removedNode.next;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        // removedNode.prev.next = removedNode.next;
        // removedNode.next.prev = removedNode.prev;
        removedNode.next = null; // Set next and prev to null on the found node
        removedNode.prev = null;
        this.length--; // Decrement the length
        return removedNode; // Return the removed node
    }
    // Second remove method version
    remove_v2(index) {
        // Check for invalid index
        if (index < 0 || index >= this.length) return undefined;
    
        let removed;
    
        // Remove the head node
        if (index === 0) {
            removed = this.head;
            this.head = removed.next;
            if (this.head) {
                this.head.prev = null;
            }
            // If the list becomes empty, update tail as well
            if (this.length === 1) {
                this.tail = null;
            }
        }
        // Remove the tail node
        else if (index === this.length - 1) {
            removed = this.tail;
            this.tail = removed.prev;
            this.tail.next = null;
        }
        // Remove a node from the middle
        else {
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            removed = current;
            let prevNode = removed.prev;
            let nextNode = removed.next;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
        }
        
        this.length--;
        return removed;
    }    
    reverse() {
        // If the list is empty or has only one node, there's nothing to reverse.
        if (this.length <= 1) return this;
        
        let current = this.head;
        let temp = null;
        
        // Swap head and tail
        this.head = this.tail;
        this.tail = current;
        
        // Traverse through the list and swap next and prev for each node.
        while (current) {
            // Temporarily store the next node
            temp = current.next;
            // Swap the next and prev pointers
            current.next = current.prev;
            current.prev = temp;
            // Move to the next node in the original list order
            current = temp;
        }
        
        return this;
    }    
}

var list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")
