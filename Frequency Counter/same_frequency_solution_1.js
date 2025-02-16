// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities: Time: O(N)

// Function to check if two numbers have the same frequency of digits
function sameFrequency(num1, num2) {
    // Convert numbers to string
    let str1 = num1.toString();
    let str2 = num2.toString();
    
    // If lengths are different, they can't have the same frequency
    if (str1.length !== str2.length) return false;
    
    // Create a frequency counter object
    let frequencyCounter = {};
    
    // Populate the frequency counter with digits from the first number
    for (let digit of str1) {
      frequencyCounter[digit] = (frequencyCounter[digit] || 0) + 1;
    }
    
    // Compare against the second number
    for (let digit of str2) {
      if (!frequencyCounter[digit]) {
        return false;
      } else {
        frequencyCounter[digit] -= 1;
      }
    }
    
    return true;
  }

// Test cases for sameFrequency
console.log(sameFrequency(182,281)); // true
console.log(sameFrequency(34,14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22,222)); // false