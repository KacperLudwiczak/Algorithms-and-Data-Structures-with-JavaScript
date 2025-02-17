// Write a function called power which accepts a base and an exponent. 
// The function should return the power of the base to the exponent. 
// This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(base, exponent) {
    // Base case: any number to the power of 0 is 1
    if (exponent === 0) return 1;
    // Recursive case: multiply base with the result of power(base, exponent - 1)
    return base * power(base, exponent - 1);
}

// Example usage:
console.log(power(2, 3)); // Output: 8
console.log(power(5, 2)); // Output: 25
console.log(power(10, 0)); // Output: 1

// HINT:
// 2^3 = 2 * 2^2
    // 2^2 = 2 * 2^1
        // 2^1 = 2 * 2^0
            // 2^0 = 1
        // 2^1 = 2 * 1
    // 2^2 = 2 * 2
// 2^3 = 2 * 4 = 8