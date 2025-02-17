// Recursive Version
function countDownRecursive(num){
    if(num <= 0) { // Base case
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDownRecursive(num);
}
console.log("Recursive Version")
countDownRecursive(3)
// console.log(3)
// num--
// countDownRecursive(2)
// console.log(2)
// num--
// countDownRecursive(1)
// console.log(1)
// num--
// countDownRecursive(0)
// if 0 <= 0
// console.log("All done!");

// Iterative Version
function countDownIterative(num){
    for(var i = num; i > 0; i--){
        console.log(i);
    }
    console.log("All done!")
}
console.log("Iterative Version")
countDownIterative(3)

