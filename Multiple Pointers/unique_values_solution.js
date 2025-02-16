// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
// There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr) {
  // If array is empty, return 0
  if (arr.length === 0) return 0;
  
  // Initialize left pointer at the start of the array
  let left = 0;
  
  // Iterate through the array with the right pointer
  for (let right = 1; right < arr.length; right++) {
    // If values at left and right pointers are different, move left pointer forward
    if (arr[left] !== arr[right]) {
      left++;
      // Update the value at the left pointer to the new unique value
      arr[left] = arr[right];
    }
  }
  // Return the count of unique values (left pointer index + 1)
  return left + 1;
  }
  
  // Test cases for countUniqueValues
  console.log(countUniqueValues([1,1,1,1,1,2])); // 2
  console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // 7
  console.log(countUniqueValues([])); // 0
  console.log(countUniqueValues([-2,-1,-1,0,1])); // 4