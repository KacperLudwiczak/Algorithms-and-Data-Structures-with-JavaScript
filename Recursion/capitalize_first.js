// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst (arr) {
    if(arr.length === 0) return []; // Base case: if array is empty, return empty array
    // Capitalize first letter of first element and process the rest
    const capitalized = arr[0][0].toUpperCase() + arr[0].slice(1);
    return [capitalized].concat(capitalizeFirst(arr.slice(1)));
  }

console.log(capitalizeFirst(['car','taco','banana'])); // Output: ['Car','Taco','Banana']