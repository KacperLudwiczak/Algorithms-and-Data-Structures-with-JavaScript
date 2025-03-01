// Write a function called coinChange which accepts two parameters: an array of denominations and a value. 
// The function should return the number of ways you can obtain the value from the given collection of denominations. 
// You can think of this as figuring out the number of ways to make change for a given value from a supply of coins.

function coinChange(denominations, value) {
    let ways = new Array(value + 1).fill(0);
    ways[0] = 1; // There's one way to make 0 amount: use no coins
    
    for (let coin of denominations) {
        for (let i = coin; i <= value; i++) {
            ways[i] += ways[i - coin];
        }
    }
    
    return ways[value];
}

// Explanation:
// Initialize an array ways of size value + 1, with all elements set to 0, except ways[0] = 1 since there is only one way to make 0 (using no coins).
// Iterate over each coin in denominations, and for each coin, update the ways array to account for the number of ways to make each amount using that coin.
// The final answer is stored in ways[value], which represents the total number of ways to make the given value.

// Test cases
const denominations = [1, 5, 10, 25];
console.log(coinChange(denominations, 1)); // 1
console.log(coinChange(denominations, 2)); // 1
console.log(coinChange(denominations, 5)); // 2
console.log(coinChange(denominations, 10)); // 4
console.log(coinChange(denominations, 25)); // 13
console.log(coinChange(denominations, 45)); // 39
console.log(coinChange(denominations, 100)); // 242
console.log(coinChange(denominations, 145)); // 622
console.log(coinChange(denominations, 1451)); // 425663
console.log(coinChange(denominations, 14511)); // 409222339