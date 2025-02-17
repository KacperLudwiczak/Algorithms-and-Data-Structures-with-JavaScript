// Assign the first element to be the smallest value (this is called the minimum). It does not matter right now if this actually the smallest value in the array.
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
// If the "minimum" is not the value (index) you initially began with, swap the two values. You will now see that the beginning of the array is in the correct order (similar to how after the first iteration of bubble sort, we know the rightmost element is in its correct place).
// Repeat this with the next element until the array is sorted.

function selectionSort(arr, comparator) {
    if (typeof comparator !== 'function') {
      comparator = (a, b) => a - b;
    }
    
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (comparator(arr[j], arr[minIndex]) < 0) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    
    return arr;
  }
  
  // Selection Sort Examples
  console.log(selectionSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
  console.log(selectionSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
  console.log(selectionSort([1, 2, 3])); // [1, 2, 3]
  console.log(selectionSort([])); // []

  var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
  
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
  
  console.log(selectionSort(nums));
  console.log(selectionSort(kitties, strComp));
  console.log(selectionSort(moarKittyData, oldestToYoungest));