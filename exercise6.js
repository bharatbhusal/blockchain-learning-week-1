//Exercise 6: Factorial Calculator
//Task:
//   - Write a JavaScript function called **`calculateFactorial`** that takes a number as a parameter and returns its factorial.
// Example:
// calculateFactorial(5); // should return 120
// calculateFactorial(0); // should return 1

function calculateFactorial(numParm) {
    if (numParm == 0 || numParm == 1) return 1
    return numParm * calculateFactorial(numParm - 1)
}

console.log(calculateFactorial(5))
console.log(calculateFactorial(0))