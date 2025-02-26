class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element); // Push the value into the values property on the heap
        this.bubbleUp(); // Bubble Up (swap)
    }
    bubbleUp(){
        let idx = this.values.length - 1; // Create a variable called index which is the length of the values property - 1
        const element = this.values[idx];
        while(idx > 0){ // Keep looping as long as the values element at the parentIndex is less than the values element at the child index
            let parentIdx = Math.floor((idx - 1)/2); // Create a variable called parentIndex which is the floor of (index-1)/2
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element; // Swap the value of the values element at the parentIndex with the value of the element property at the child index
            this.values[idx] = parent;
            idx = parentIdx; // Set the index to be the parentIndex, and start over!
        }
    }
    extractMax(){
        const max = this.values[0];
        const end = this.values.pop(); // Pop from the values property, so you can return the value at the end.
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown(){
        let idx = 0; // Your parent index starts at 0 (the root)
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1; // Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
            let rightChildIdx = 2 * idx + 2; // Find the index of the right child: 2 * index + 2 (make sure its not out of bounds)
            let leftChild,rightChild;
            let swap = null; // If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child.

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)
                 ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);