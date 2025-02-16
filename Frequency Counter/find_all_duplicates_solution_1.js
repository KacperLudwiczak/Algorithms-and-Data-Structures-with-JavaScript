// Given an array of positive integers, some elements appear twice and others appear once. 
// Find all the elements that appear twice in this array. 
// Note that you can return the elements in any order.
// Time Complexity - O(n)

// Function to find all duplicate elements in an array (O(n) Time, O(n) Space)
function findAllDuplicates(arr) {
    let seen = new Set();
    let duplicates = new Set();
    
    for (let num of arr) {
      if (seen.has(num)) {
        duplicates.add(num);
      } else {
        seen.add(num);
      }
    }
    
    return Array.from(duplicates);
  }