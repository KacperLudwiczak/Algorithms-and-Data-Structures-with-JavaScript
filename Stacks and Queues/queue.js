class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){ // This function accepts some value
        var newNode = new Node(val); // Create a new node using that value passed to the function
        if(!this.first){ // If there are no nodes in the queue, set this node to be the first and last property of the queue
            this.first = newNode;
            this.last = newNode;
        } else { // Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size; // Increment the size of the queue by 1
    }
    dequeue(){
        if(!this.first) return null; // If there is no first property, just return null

        var temp = this.first; // Store the first property in a variable
        if(this.first === this.last) { // See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
            this.last = null;
        }
        this.first = this.first.next; // If there is more than 1 node, set the first property to be the next property of first 
        this.size--; // Decrement the size by 1
        return temp.value; // Return the value of the node dequeued
    }
}