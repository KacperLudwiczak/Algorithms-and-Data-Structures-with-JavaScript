// This function should rotate all the nodes in the list by some number passed in. 
// For instance, if your list looks like 1 -> 2 -> 3 -> 4 -> 5 and you rotate by 2, 
// the list should be modified to 3 -> 4 -> 5 -> 1 -> 2. 
// The number passed in to rotate can be any integer.
// Time Complexity: O(N), where N is the length of the list.
// Space Complexity: O(1)

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;   
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
rotate(k) {
    if (!this.head || !this.head.next || this.length === 0) return this;
    
    // Normalize k so that it's within the range of the list's length.
    let r = k % this.length;
    if (r < 0) r += this.length;
    if (r === 0) return this; // No rotation needed

    // Find the new tail: the node at index r-1.
    let newTail = this.head;
    for (let i = 1; i < r; i++) {
        newTail = newTail.next;
    }
    
    // The new head is the node right after the new tail.
    let newHead = newTail.next;
    
    // Connect the old tail to the current head to form a loop.
    this.tail.next = this.head;
    
    // Update the head and tail pointers.
    this.head = newHead;
    this.tail = newTail;
    
    // Break the loop.
    newTail.next = null;
    
    return this;
}
}
