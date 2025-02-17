// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
    // Base case: if the string is empty or has one character, return it
    if (str.length <= 1) return str;
    // Recursive case: take the last character and append the reversed rest of the string
    return str[str.length - 1] + reverse(str.slice(0, -1));
}

console.log(reverse('awesome')); // Output: 'emosewa'
console.log(reverse('rithmschool')); // Output: 'loohcsmhtir'