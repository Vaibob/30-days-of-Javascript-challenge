// Challenge 7 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197138

// This code file will only contain feature request 1 i.e. tasks 1 , 2 , 3 , 4 , 7

// Task 1

let book = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
    overviewOfTheBook: function() {
        return `The title of our book is ${this.title} and the author is ${this.author}`; // Arrow functions do not have their own this context; instead, they inherit the this value from their enclosing scope.
    },
    updatedYear: function(newYear){
        this.year=newYear
        return this
    },
    titleAndYear:function () {
        return [this.title , this.year]
    },
}

console.log(book); 

// {
//   title: 'Atomic Habits',
//   author: 'James Clear',
//   year: 2018,
//   overviewOfTheBook: [Function: overviewOfTheBook],
//   updatedYear: [Function: updatedYear],
//   titleAndYear: [Function: titleAndYear]
// }



// Task 2

console.log(`The title of the book is ${book.title}`) // The title of the book is Atomic Habits
console.log(`The author of the book is ${book.author}`) // The author of the book is James Clear

// Task 3

console.log(book.overviewOfTheBook()) // The title of our book is Atomic Habits and the author is James Clear

// Task 4

console.log(book.updatedYear(2000))
// {
//     title: 'Atomic Habits',
//     author: 'James Clear',
//     year: 2000,
//     overviewOfTheBook: [Function: overviewOfTheBook],
//     updatedYear: [Function: updatedYear],
//     titleAndYear: [Function: titleAndYear]
//   }

// Task 7

console.log(book.titleAndYear()) // [ 'Atomic Habits', 2000 ]