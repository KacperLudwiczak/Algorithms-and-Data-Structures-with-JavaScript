// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

function flatten(arr) {
    // Base case: if array is empty, return empty array
    if (arr.length === 0) return [];
    // If first element is an array, flatten it and concatenate with the rest
    if (Array.isArray(arr[0])) return flatten(arr[0]).concat(flatten(arr.slice(1)));
    // If first element is not an array, include it and process the rest
    return [arr[0]].concat(flatten(arr.slice(1)));
}

console.log(flatten([1, 2, 3, [4, 5]])); // Output: [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // Output: [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])); // Output: [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // Output: [1,2,3]