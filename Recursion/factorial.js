// Write a function factorial which accepts a number and returns the factorial of that number. 
// Factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  
// Factorial zero (0!) is always 1.

// Recursive Version
function factorialRecursive(num){
    if(num === 0) return 1; // Base case: 0! is 1
    return num * factorial(num-1); // Recursive case: num * factorial(num - 1)
}
console.log("Recursive Version")
console.log(factorialRecursive(3)); // Output: 6
// factorialRecursive(3) -> return 3 * factorialRecursive(2)
   // factorialRecursive(2) -> return 2 * factorialRecursive(1)
      // factorialRecursive(1) -> if(1 === 1) return 1
   // back to factorialRecursive(2) -> return 2 * factorialRecursive(1) -> return 2 * 1 -> return 2
// back to factorialRecursive(3) -> return 3 * factorialRecursive(2) -> return 3 * 2 -> return 6

// Iterative Version
function factorialIterative(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total;
}
console.log("Iterative Version")
console.log(factorialIterative(3)); // Output: 6
// factorial(3) -> i = 3 -> 3 > 1 -> total *= i -> total *= 3 -> 1 *= 3 -> total = 3
// i-- -> i = 2 -> 2 > 1 -> total *= i -> total *= 2 -> total = 3 *= 2 -> total = 6
// i-- -> i = 1 -> 1 > 1 -> end of loop -> return total -> return 6
console.log(factorialIterative(4)); // Output: 24
