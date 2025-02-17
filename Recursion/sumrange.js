// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function.

function sumRange(num){
   if(num === 1) return 1; // Base case
   return num + sumRange(num-1);
}

console.log(sumRange(4)); // Output: 10
// sumRange(4) -> return 4 + sumRange(3)
   // sumRange(3) -> return 3 + sumRange(2)
      // sumRange(2) -> return 2 + sumRange(1)
         // sumRange(1) -> if(1 === 1) return 1
      // back to sumRange(2) -> return 2 + sumRange(1) -> return 2 + 1 -> return 3
   // back to sumRange(3) -> return 3 + sumRange(2) -> return 3 + 3 -> return 6
// back to sumRange(4) -> return 4 + sumRange(3) -> return 4 + 6 -> return 10

console.log(sumRange(3)); // Output: 6
// sumRange(3) -> return 3 + sumRange(2)
   // sumRange(2) -> return 2 + sumRange(1)
      // sumRange(1) -> if(1 === 1) return 1
   // back to sumRange(2) -> return 2 + sumRange(1) -> return 2 + 1 -> return 3
// back to sumRange(3) -> return 3 + sumRange(2) -> return 3 + 3 -> return 6

