// Bonus Exercise: Unique Characters
// Task:
//   - Write a JavaScript function called **`hasUniqueChars`** that takes a string as a parameter and returns **`true`** if the string has all unique characters and **`false`** if it does not.
// Example:
// hasUniqueChars("abcd"); // should return true
// hasUniqueChars("aabc"); // should return false

function hasUniqueChars(stringParm) {
    const pool = []
    for (const i of stringParm)
    {
        if (!pool.includes(i))
        {
            pool.push(i) //adding all unique characters in an array.
        }
    }
    if (pool.length === stringParm.length) return true //lenght of array and string is same means all characters in the string are unique.
    else return false
}


console.log(hasUniqueChars("abcd"))
console.log(hasUniqueChars("aabc"))