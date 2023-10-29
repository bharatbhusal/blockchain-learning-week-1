//Exercise 6: Factorial Calculator
//Task:
//   - Write a JavaScript function called **`calculateFactorial`** that takes a number as a parameter and returns its factorial.
// Example:
// calculateFactorial(5); // should return 120
// calculateFactorial(0); // should return 1

function calculateFactorial(numParm) {
    //Recursively finding the factorial. 
    if (numParm == 0 || numParm == 1) return 1 //factorial of 0 and 1 is 1.
    return numParm * calculateFactorial(numParm - 1) // factorial of anytihng more than 1 is the product of all the numbers from itself to 1.
}

console.log(calculateFactorial(5))
console.log(calculateFactorial(0))