// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. 
// If the value is not found, return -1.

function search(arr, val) {
    // Initialize left and right pointers
    let left = 0;
    let right = arr.length - 1;
    
    // Perform binary search
    while (left <= right) {
      // Find the middle index
      let mid = Math.floor((left + right) / 2);
      
      // If the middle element is the target value, return its index
      if (arr[mid] === val) {
        return mid; 
      } 
      // If the target value is greater, search in the right half
      else if (arr[mid] < val) {
        left = mid + 1;
      } 
      // If the target value is smaller, search in the left half
      else {
        right = mid - 1;
      }
    }
    
    // If value is not found, return -1
    return -1;
  }

// Binary Search
// Time Complexity - Log(N) / O(log n)

// Test cases for search using Binary Search
console.log(search([1,2,3,4,5,6],4)); // 3
console.log(search([1,2,3,4,5,6],6)); // 5
console.log(search([1,2,3,4,5,6],11)); // -1

/*
example: 
search([1,2,3],3) // 2
left = 0;
right = arr.length - 1 -> 3 - 1 = 2
left <= right -> 0 <= 2
mid = Math.floor((left + right) / 2) --> Math.floor((0 + 2) / 2) -> 1
arr[mid] < val -> arr[1] < 3 -> 2 < 3 -> left = mid + 1 -> left = 2
left <= right -> 2 <= 2
mid = Math.floor((left + right) / 2); -> Math.floor((2 + 2) / 2) -> 2
arr[mid] === val -> arr[2] === 3 -> 3 === 3 -> return mid -> 2
*/