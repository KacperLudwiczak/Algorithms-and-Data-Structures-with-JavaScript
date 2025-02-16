// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.
  
// Function to check for duplicates using sorting and multiple pointers (O(n log n) Time, O(1) Space)
function areThereDuplicatesUsingSorting(...args) {
    // Sort the arguments first (O(n log n))
    args.sort((a, b) => a > b ? 1 : -1);
    
    // Use multiple pointers to check for duplicates (O(n))
    let left = 0;
    for (let right = 1; right < args.length; right++) {
      if (args[left] === args[right]) {
        return true; // Duplicate found
      }
      left++;
    }
    return false; // No duplicates found
  }

// Test cases for areThereDuplicatesUsingSorting
console.log(areThereDuplicatesUsingSorting(1, 2, 3)); // false
console.log(areThereDuplicatesUsingSorting(1, 2, 2)); // true
console.log(areThereDuplicatesUsingSorting('a', 'b', 'c', 'a')); // true