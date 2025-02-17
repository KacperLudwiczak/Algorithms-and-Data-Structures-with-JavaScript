// Implement insertionSort  . Given an array, both algorithms will sort the values in the array. 
// The functions take 2 parameters: an array and an optional comparator function. 
// The comparator function is a callback that will take two values from the array to be compared. 
// The function returns a negative value if the first value is less than the second, 
// a positive value if the first value is greater than the second, and 0 if both values are equal. 
// The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.

function insertionSort(arr, comparator) {
    if (typeof comparator !== 'function') {
      comparator = (a, b) => a - b;
    }
    
    for (let i = 1; i < arr.length; i++) {
      let currentVal = arr[i];
      let j = i - 1;
      while (j >= 0 && comparator(arr[j], currentVal) > 0) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = currentVal;
    }
    
    return arr;
  }

// Insertion Sort Examples
console.log(insertionSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(insertionSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(insertionSort([1, 2, 3])); // [1, 2, 3]
console.log(insertionSort([])); // []

var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(bubbleSort(nums));
  
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
function strComp(a, b) {
    if (a < b) { return -1; }
    else if (a > b) { return 1; }
    return 0;
}

var moarKittyData = [
  { name: "LilBub", age: 7 },
  { name: "Garfield", age: 40 },
  { name: "Heathcliff", age: 45 },
  { name: "Blue", age: 1 },
  { name: "Grumpy", age: 6 }
];
function oldestToYoungest(a, b) {
  return b.age - a.age;
}

console.log(insertionSort(nums));
console.log(insertionSort(kitties, strComp));
console.log(insertionSort(moarKittyData, oldestToYoungest));