// In this exercise, your goal is to implement a function called pivot . 
// This function contains nearly all of the logic you'll need in order to implement Quick Sort in the next exercise.
// The pivot  function is responsible for taking an array, setting the pivot value, and mutating the array so that all values less than the pivot wind up to the left of it, 
// and all values greater than the pivot wind up to the right of it. 
// It's also helpful if this helper returns the index of where the pivot value winds up.
// In this code, the specifics of how the arr  variable gets mutated are not important. All that matters is that 4 winds up at index 2, with 3 and 2 to the left of it (in any order), 
// and with 5 and 6 to the right of it (in any order).
// When we get to Quick Sort, it will be helpful for the pivot  helper to accept not only an array an an optional comparator, but also an optional start and end index. 
// These should default to 0 and the array length minus 1, respectively. We've provided these to you in the starter code, but their utility may not be apparent yet. 
// That's okay! When you get to implementing Quick Sort, their usefulness will become clearer.

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
  
  // Example test cases
  var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
  var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
  var arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
  
  function strLength(a, b) {
    return a.length - b.length;
  }
  
  console.log(pivot(arr1)); // 3
  console.log(arr1);
  
  console.log(pivot(arr2)); // 4
  console.log(arr2);
  
  console.log(pivot(arr3, strLength)); // 1
  console.log(arr3);
  