// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr){
    if(arr.length === 0) return 1; // Base case: if array is empty, return 1
    return arr[0] * productOfArray(arr.slice(1));
 }

 console.log(productOfArray([1, 2, 3, 4])); // Output: 24
 console.log(productOfArray([3, 5, 2])); // Output: 30
 console.log(productOfArray([])); // Output: 1

productOfArray([1, 2, 3]) // Output: 6
// arr[0] * productOfArray(arr.slice(1)) -> 1 * productOfArray([2,3])
    // arr[0] * productOfArray(arr.slice(1)) -> 2 * productOfArray([3])
        // arr[0] * productOfArray(arr.slice(1)) -> 3 * productOfArray([])
            // if(arr.length === 0) -> if(0 === 0) -> return 1
        // 3 * productOfArray([]) -> 3 * 1 -> 3
    // 2 * productOfArray([3]) -> 2 * 3 -> 6
// 1 * productOfArray([2,3]) -> 1 * 6 -> 6

    