// Exercise 5: Palindrome Checker
// Task:
//    Write a JavaScript function called **`isPalindrome`** that takes a string as a parameter and returns **`true`** if the string is a palindrome and **`false`** if it is not.
// Example:
// isPalindrome("Madam"); // should return true
// isPalindrome("12321"); // should return true
// isPalindrome("Hello"); // should return false

function isPalindrome(stringParm) {
    if (stringParm.toLowerCase() === reverseString(stringParm).toLowerCase()) return true
    else return false
}

function reverseString(stringParm) {
    return [...stringParm].reverse().join('')
}

console.log(isPalindrome("Madam"))
console.log(isPalindrome("12321"))
console.log(isPalindrome("Hello"))