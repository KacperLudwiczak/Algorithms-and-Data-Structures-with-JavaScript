// Write a function called sumZero which accepts a sorted array of integers. 
// The function should find the first pair where the sum is 0. 
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}

sumZero([-4,-3,-2,-1,0,1,2,3,10])

// Time Complexity - O(N)
// Space Complexity - O(1)

/*
example:
sumZero([-3, 1, 3])
arr[0] + arr[2] = -3 + 3 = 0
return true

example:
sumZero([-3, 1, 2])
arr[0] + arr[2] = -3 + 2 = -1
sum < 0 -> left++ -> left = 1
arr[1] + arr[2] = 1 + 2 = 3
sum > 0 -> right-- -> right = 1
left = right -> end of loop, the array is wrong, no left + right = 0

example:
sumZero([-2,0,1,3])
arr[0] + arr[3] = -2 + 3 = 1
sum > 0 -> right-- -> right = 2
arr[0] + arr[2] = -2 + 1 = -1
sum < 0 -> left++ -> left = 1
arr[1] + arr[2] = 0 + 1 = 1
sum > 0 -> right-- -> right = 1
left = right -> end of loop, the array is wrong, no left + right = 0
*/
