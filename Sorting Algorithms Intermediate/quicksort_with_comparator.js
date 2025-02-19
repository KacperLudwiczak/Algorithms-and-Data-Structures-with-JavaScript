// The algorithm is as follows:
// Pick an element in the array and designate it as the "pivot". While there are quite a few options for choosing the pivot. We'll make things simple to start, and will choose the pivot as the first element. 
// This is not an ideal choice, but it makes the algorithm easier to understand for now.
// Next, compare every other element in the array to the pivot.
// If it's less than the pivot value, move it to the left of the pivot.
// If it's greater, move it to the right.
// Once you have finished comparing, the pivot will be in the right place.
// Next, recursively call quicksort again with the left and right halves from the pivot until the array is sorted.
// It's easiest to implement Quick Sort with the aid of your pivot  helper from the earlier exercise. 
// This function is responsible for taking an array, setting the pivot value, and mutating the array so that all values less than the pivot wind up to the left of it, and all values greater than the pivot wind up to the right of it. 
// It's also helpful if this helper returns the index of where the pivot value winds up.
// The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.

function pivot(arr, comparator, start = 0, end = arr.length - 1) {
    function swap(array, i, j) {
      [array[i], array[j]] = [array[j], array[i]];
    }
  
    let pivotIndex = start;
    let pivotValue = arr[start];
  
    for (let i = start + 1; i <= end; i++) {
      if (comparator) {
        if (comparator(arr[i], pivotValue) < 0) {
          pivotIndex++;
          swap(arr, i, pivotIndex);
        }
      } else {
        if (arr[i] < pivotValue) {
          pivotIndex++;
          swap(arr, i, pivotIndex);
        }
      }
    }
  
    swap(arr, start, pivotIndex);
    return pivotIndex;
  }
  
  function quickSort(arr, comparator, start = 0, end = arr.length - 1) {
    if (start >= end) return arr;
    
    let pivotIndex = pivot(arr, comparator, start, end);
    quickSort(arr, comparator, start, pivotIndex - 1);
    quickSort(arr, comparator, pivotIndex + 1, end);
    
    return arr;
  }
  
  // Example test cases
  var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
  var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
  var arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
  
  function strLength(a, b) {
    return a.length - b.length;
  }
  
  console.log(quickSort(arr1)); // [2, 3, 4, 5, 7, 8, 9, 10, 20]
  console.log(arr1);
  
  console.log(quickSort(arr2)); // [0, 2, 4, 5, 8, 10, 11, 12, 13, 16]
  console.log(arr2);
  
  console.log(quickSort(arr3, strLength)); // ["Blue", "LilBub", "Grumpy", "Garfield", "Heathcliff"]
  console.log(arr3);
  