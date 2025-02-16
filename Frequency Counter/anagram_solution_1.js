// Given two strings, write a function to determine if the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(str1, str2) {
    // If the lengths of the strings are different, they cannot be anagrams
    if (str1.length !== str2.length) {
      return false;
    }
    
    // Create frequency counters for both strings
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    
    // Populate frequency counter for the first string
    for (let char of str1) {
      frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    }
    
    // Populate frequency counter for the second string
    for (let char of str2) {
      frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
    }
    
    // Compare both frequency counters
    for (let key in frequencyCounter1) {
      // If the character count does not match, return false
      if (frequencyCounter1[key] !== frequencyCounter2[key]) {
        return false;
      }
    }
    
    // If all character counts match, return true
    return true;
  }
  
  // Test cases
  console.log(validAnagram('', '')); // true (both are empty strings)
  console.log(validAnagram('aaz', 'zza')); // false (different letter counts)
  console.log(validAnagram('anagram', 'nagaram')); // true (letters rearranged correctly)
  console.log(validAnagram('rat', 'car')); // false (different letters)
  console.log(validAnagram('awesome', 'awesom')); // false (different lengths)
  console.log(validAnagram('qwerty', 'qeywrt')); // true (letters rearranged correctly)
  console.log(validAnagram('texttwisttime', 'timetwisttext')); // true (letters rearranged correctly)