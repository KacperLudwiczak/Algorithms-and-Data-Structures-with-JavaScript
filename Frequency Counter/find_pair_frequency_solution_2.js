// Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. 
// This function should return true if the pair exists or false if it does not.

// O(n) space + O(n) time
function findPair(arr, n) {
    var s = new Set(arr.map((e) => Math.abs(e - n)));
    if (n === 0 && s.size === arr.length) return false;
    for (let i = 0; i < arr.length; i++) {
      if (s.has(arr[i])) return true;
    }
    return false;
  }