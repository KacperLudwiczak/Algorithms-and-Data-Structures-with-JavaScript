// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(arr) {
    // Base case: if array is empty, return empty array
    if (arr.length === 0) return [];
    // Capitalize the entire word and process the rest
    return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
}

// Example usage:
console.log(capitalizeWords(['i', 'am', 'learning', 'recursion'])); // Output: ['I', 'AM', 'LEARNING', 'RECURSION']
