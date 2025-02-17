function maxSubarraySum(arr, num){
  // If the array length is smaller than num, return null
  if (arr.length < num) return null;
  
  let maxSum = 0;
  let tempSum = 0;

  // Calculate the sum of the first 'num' elements
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  // Assign initial sum to tempSum
  tempSum = maxSum;

  // Slide the window through the array
  for (let i = num; i < arr.length; i++) {
    // Subtract the first element of the previous window and add the next element
    tempSum = tempSum - arr[i - num] + arr[i];
    // Update maxSum if tempSum is greater
    maxSum = Math.max(maxSum, tempSum);
  }
  
  // Return the maximum sum found
  return maxSum;
}

// Test cases for maxSubarraySum
console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3)); // 19

// Time Complexity - O(N)

/*
example:
maxSubarraySum([1,5,2,6,3],2)
maxSum = 0
maxSum += arr[0] -> maxSum += 1 = 1
maxSum += arr[1] -> maxSum += 5 = 6
i < num -> 2 < 2 -> end of loop
tempSum = maxSum -> tempSum = 6
let i = num; i < arr.length -> i = 2; 2 < 5
i = 2
tempSum = tempSum - arr[i - num] + arr[i] -> 6 - arr[2 - 2] + arr[2] -> 6 - 1 + 2 = 7
maxSum = Math.max(maxSum, tempSum) -> maxSum = Math.max(6, 7) -> 7
i = 3
tempSum = tempSum - arr[i - num] + arr[i] -> 7 - arr[3 - 2] + arr[3] -> 7 - 5 + 6 = 8
maxSum = Math.max(maxSum, tempSum) -> maxSum = Math.max(7, 8) -> 8
i = 4
tempSum = tempSum - arr[i - num] + arr[i] -> 8 - arr[4 - 2] + arr[4] -> 8 - 2 + 3 = 9
maxSum = Math.max(maxSum, tempSum) -> maxSum = Math.max(8, 9) -> 9
i < arr.length -> 4 < 4 -> end of loop
return maxSum -> 9
*/