// Implement a stack using two queues:
// You should implement the following functions:
// - push (returns the stack)
// - pop (returns the value popped)

class Stack {
    constructor() {
        this.queue1 = new Queue();
        this.queue2 = new Queue();
    }
    
    push(val) {
        // Enqueue new element into queue2
        this.queue2.enqueue(val);
        
        // Transfer all elements from queue1 to queue2
        while (this.queue1.size > 0) {
            this.queue2.enqueue(this.queue1.dequeue());
        }
        
        // Swap the two queues:
        // Now, queue1 has the new order (with the new element at front)
        this.queue1 = this.queue2;
        this.queue2 = new Queue();
        
        return this; // Allow chaining: s.push(10).push(20)
    }
    
    pop() {
        // If stack is empty, return null
        if (this.queue1.size === 0) return null;
        // Dequeue from queue1, which returns the top element of the stack
        return this.queue1.dequeue();
    }
}

// --- Provided Helper Classes ---

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(data) {
        var node = new Node(data);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;
        var temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

// --- Example Usage ---
var s = new Stack();
console.log(s.push(10).push(20).push(30).pop()); // 30
console.log(s.pop()); // 20
console.log(s.pop()); // 10
console.log(s.pop()); // null
console.log(s.push(30).push(40).push(50).pop()); // 50
console.log(s.push(60).pop()); // 60
