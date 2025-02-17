// Write a recursive function called someRecursive which accepts an array and a callback. 
// The function returns true if a single value in the array returns true when passed to the callback. 
// Otherwise it returns false.

function someRecursive(arr, callback) {
    // Base case: if array is empty, return false
    if (arr.length === 0) return false;
    // Check if first element passes the callback test
    if (callback(arr[0])) return true;
    // Recursive case: check the rest of the array
    return someRecursive(arr.slice(1), callback);
}

const isOdd = val => val % 2 !== 0;
console.log(someRecursive([1,2,3,4], isOdd)); // Output: true
console.log(someRecursive([4,6,8,9], isOdd)); // Output: true
console.log(someRecursive([4,6,8], isOdd)); // Output: false
console.log(someRecursive([4,6,8], val => val > 10)); // Output: false