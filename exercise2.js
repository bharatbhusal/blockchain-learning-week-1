//*Exercise 2: Control Structures
// Task:
//   - Write a JavaScript program that logs numbers from 1 to 100.
//   - For multiples of 3, log "Fizz" instead of the number.
//   - For multiples of 5, log "Buzz" instead of the number.
//   - For numbers which are multiples of both 3 and 5, log "FizzBuzz".

function numbersWithControl(from, to) {
    while (from <= to)
    {
        if (from % 3 == 0 && from % 5 == 0)
        {
            console.log("FizzBuzz")
        } else if (from % 3 == 0)
        {
            console.log("Fizz")
        } else if (from % 5 == 0)
        {
            console.log("Buzz")
        } else console.log(from)
        from++
    }
}

numbersWithControl(1, 15)