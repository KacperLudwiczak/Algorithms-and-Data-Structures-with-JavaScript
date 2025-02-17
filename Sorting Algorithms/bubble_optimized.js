// Optimized BubbleSort with noSwaps
function bubbleSort(arr){
  var noSwaps;
  for(var i = arr.length; i > 0; i--){
    noSwaps = true;
    for(var j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;         
      }
    }
    if(noSwaps) break;
  }
  return arr;
}
// The best version

bubbleSort([8,1,2,3,4,5,6,7]);

// By adding noSwaps we eliminate unnecessary iterations.
// First we swap 8 and 1 in if(arr[j] > arr[j+1]), at the end we assign false to noSwaps, so the loop continues.
// After 8 is after 7, the if statement ends and we no longer assign false to noSwaps.
// The noSwaps is now true, and if noSwaps is true, it break the loop, and there are no unnecessary iterations.