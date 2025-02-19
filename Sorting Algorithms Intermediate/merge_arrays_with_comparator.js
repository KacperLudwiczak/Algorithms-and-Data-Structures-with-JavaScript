function merge(arr1, arr2, comparator) {
    let results = [];
    let arr1Index = 0, arr2Index = 0;
  
    // Default comparator for ascending order sorting
    if (!comparator) {
      comparator = (a, b) => a - b;
    }
  
    while (arr1Index < arr1.length && arr2Index < arr2.length) {
      if (comparator(arr1[arr1Index], arr2[arr2Index]) <= 0) {
        results.push(arr1[arr1Index]);
        arr1Index++;
      } else {
        results.push(arr2[arr2Index]);
        arr2Index++;
      }
    }
  
    // Add remaining elements from arr1
    while (arr1Index < arr1.length) {
      results.push(arr1[arr1Index]);
      arr1Index++;
    }
  
    // Add remaining elements from arr2
    while (arr2Index < arr2.length) {
      results.push(arr2[arr2Index]);
      arr2Index++;
    }
  
    return results;
  }
  