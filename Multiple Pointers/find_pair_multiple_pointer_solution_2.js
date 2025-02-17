// Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. 
// This function should return true if the pair exists or false if it does not.

// O(1) space + O(n log n) time
  function findPair(arr, num) {
    arr.sort((a, b) => a - b);
    let i = 0;
    let j = 1;
    while (i < arr.length && j < arr.length) {
      if (i !== j && Math.abs(arr[j] - arr[i]) === Math.abs(num)) {
        return true
      } else if (arr[j] - arr[i] < num) {
        j++
      } else {
        i++
      }
    }
    return false;
  }