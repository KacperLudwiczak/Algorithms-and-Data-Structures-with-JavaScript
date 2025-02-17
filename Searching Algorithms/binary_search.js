// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// Original Solution
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    
    while(arr[middle] !== elem && start <= end) { // Continue searching until the value is found or the range is invalid
        if(elem < arr[middle]){
            end = middle - 1; // Search left half
        } else {
            start = middle + 1; // Search right half
        }
        middle = Math.floor((start + end) / 2); // Recalculate middle index
    }
    
    if(arr[middle] === elem){
        return middle; // Return the index if found
    }
    return -1; // Return -1 if not found
}

// Refactored Version
function binarySearchRefactored(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1; // Move left if element is smaller
        else start = middle + 1; // Move right if element is larger
        middle = Math.floor((start + end) / 2); // Update middle index
    }
    
    return arr[middle] === elem ? middle : -1; // Return the index if found, otherwise return -1
}

// Example test cases
console.log(binarySearch([1,2,3,4,5],2)); // 1
console.log(binarySearch([1,2,3,4,5],3)); // 2
console.log(binarySearch([1,2,3,4,5],5)); // 4
console.log(binarySearch([1,2,3,4,5],6)); // -1
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)); // 2
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)); // 16
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)); // -1

// example:
// console.log(binarySearch([1,2,3,4,5],2))
// var start = 0 -> 0
// var end = arr.length - 1 -> 4
// var middle = Math.floor((start + end) / 2) -> 2
// while(arr[middle] !== elem && start <= end) -> while(3 !== 2 && 0 <= 4) ->
    // if(elem < arr[middle]) -> if(2 < 3) -> end = middle - 1 -> end = 2 - 1 -> end = 1
    // middle = Math.floor((start + end) / 2) -> middle = Math.floor((0 + 1) / 2) -> 0
// while(arr[middle] !== elem && start <= end) ->  while(1 !== 2 && 0 <= 4) -> 
    // if(elem < arr[middle]) -> if(2 < 1) -> false -> else {start = middle + 1} ->
    // else {start = 0 + 1} -> start = 1
    // middle = Math.floor((start + end) / 2) -> middle = Math.floor((1 + 1) / 2) -> 1
    // middle = 1
//  if(arr[middle] === elem) ->  if(2 === 2) -> return middle -> 1

// Math floor example:
// console.log(`Math floor ${Math.floor((0 + 1) / 2)}`) // Output: 0