// Write a function called constructNote, which accepts two strings, a message and some letters. 
// The function should return true if the message can be built with the letters that you are given, or it should return false.
// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.
// Bonus Constraints:
// If M is the length of message and N is the length of letters:
// Time Complexity: O(M+N)
// Space Complexity: O(N)

// Function to check if a message can be constructed from given letters
function constructNote(message, letters) {
    let letterCount = {};
    
    // Populate letter frequency counter from available letters
    for (let char of letters) {
      letterCount[char] = (letterCount[char] || 0) + 1;
    }
    
    // Check if the message can be built with the available letters
    for (let char of message) {
      if (!letterCount[char]) {
        return false; // Character not found or used up
      }
      letterCount[char] -= 1;
    }
    return true;
  }

// Test cases for constructNote
console.log(constructNote('aa', 'abc')); // false
console.log(constructNote('abc', 'dcba')); // true
console.log(constructNote('aabbcc', 'bcabcaddff')); // true