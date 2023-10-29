//Exercise 7: Fibonacci Sequence
//Task:
//   - Write a JavaScript function called **`fibonacci`** that takes a number **`n`** as a parameter and returns the **`n`**th number in the Fibonacci sequence.
// Example:
// fibonacci(0); // should return 0
// fibonacci(1); // should return 1
// fibonacci(5); // should return 5

// 0 1 1 2 3 5
function fibonacci(numParm) {
    if (numParm == 0) return 0
    if (numParm == 1) return 1

    return fibonacci(numParm - 1) + fibonacci(numParm - 2)
}


console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(5))