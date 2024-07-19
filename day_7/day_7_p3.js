// Challenge 7 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197138

// This code file will only contain feature request 3 i.e. tasks 8 , 9 

// Task 8


let book = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
}

let count=1
for (const key in book) {
    console.log(`${count}. Key and value pair respectively`)
    console.log(key)
    console.log(book[key])
    count++
}

// 1. Key and value pair respectively
// title
// Atomic Habits
// 2. Key and value pair respectively
// author
// James Clear
// 3. Key and value pair respectively
// year
// 2018

// Task 9

console.log("Keys:", Object.keys(book)); // Keys: [ 'title', 'author', 'year' ]

console.log("Values:", Object.values(book)); // Values: [ 'Atomic Habits', 'James Clear', 2018 ]
