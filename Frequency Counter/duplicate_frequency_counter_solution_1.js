// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Function to check for duplicates using the frequency counter pattern (O(n) Time, O(n) Space)
function areThereDuplicatesUsingFrequencyCounter(...args) {
    let frequencyCounter = {};
    
    // Populate the frequency counter
    for (let val of args) {
    console.log(val)
      if (frequencyCounter[val]) {
        return true; // Duplicate found
      }
      frequencyCounter[val] = 1;
    }
    
    return false; // No duplicates found
  }

// Test cases for areThereDuplicatesUsingFrequencyCounter
console.log(areThereDuplicatesUsingFrequencyCounter(1, 2, 3)); // false
console.log(areThereDuplicatesUsingFrequencyCounter(1, 2, 2)); // true
console.log(areThereDuplicatesUsingFrequencyCounter('a', 'b', 'c', 'a')); // true
