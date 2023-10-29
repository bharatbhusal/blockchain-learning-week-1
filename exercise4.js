// Exercise 4: Objects
// Task:
//   - Create a JavaScript object to represent a Book, with properties for the title, author, and the number of pages.
//   - Add a method to the object that logs a description of the book to the console.


function createBook(title, author, numberOfPages) {
    return {
        title, author, numberOfPages, description: function () { console.log(`The book ${title} was written by ${author}. It has ${numberOfPages} pages.`) }
    }
}
var myBook = createBook("Twisted Love", "Anna Huong", 512)

console.log(`Title: ${myBook.title}\nAuthor: ${myBook.author}\nNo. of Pages: ${myBook.numberOfPages}`)
myBook.description()
console.log(myBook)