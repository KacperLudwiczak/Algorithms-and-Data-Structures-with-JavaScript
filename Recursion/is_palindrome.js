// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). 
// Otherwise it returns false.

function isPalindrome(str) {
    // Base case: if the string has 0 or 1 character, it's a palindrome
    if (str.length <= 1) return true;
    // Check if first and last characters match
    if (str[0] !== str[str.length - 1]) return false;
    // Recursive case: check the substring without first and last characters
    return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome('awesome')); // Output: false
console.log(isPalindrome('foobar')); // Output: false
console.log(isPalindrome('tacocat')); // Output: true
console.log(isPalindrome('amanaplanacanalpanama')); // Output: true
console.log(isPalindrome('amanaplanacanalpandemonium')); // Output: false