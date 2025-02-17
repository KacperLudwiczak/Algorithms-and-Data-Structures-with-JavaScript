// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. 
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... 
// which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers

function fib(num){
    if(num <= 2) return 1; // Base case: return 1 for the first two Fibonacci numbers
    return fib(num - 1) + fib(num - 2);  // Recursive case: sum of the two preceding numbers
  }

console.log(fib(6)); // Output: 8
console.log(fib(10)); // Output: 55
console.log(fib(4)); // Output: 3
console.log(fib(28)); // Output: 317811
console.log(fib(35)); // Output: 9227465