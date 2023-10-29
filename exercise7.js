//Exercise 7: Fibonacci Sequence
//Task:
//   - Write a JavaScript function called **`fibonacci`** that takes a number **`n`** as a parameter and returns the **`n`**th number in the Fibonacci sequence.
// Example:
// fibonacci(0); // should return 0
// fibonacci(1); // should return 1
// fibonacci(5); // should return 5

function fibonacci(numParm) {
    //recursively finding fibonacci series.
    if (numParm == 0) return 0
    if (numParm == 1) return 1
    // 0th and 1st number in fibonacci sequence is 0 and 1 respectiverly.

    return fibonacci(numParm - 1) + fibonacci(numParm - 2) //anything from 2nd to nth in the fibonacci series is the sum of number of (n-1)th and (n-2)th position.
}


console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(5))