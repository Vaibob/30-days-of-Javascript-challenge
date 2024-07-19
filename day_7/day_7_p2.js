// Challenge 7 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197138

// This code file will only contain feature request 2 i.e. tasks 5 , 6 

// Task 5

let library = {
    name: "Library of Ohara",
    books: [
        {
            title: "Atomic Habits",
            author: "James Clear",
            year: 2018,
        },
        {
            title: "The Power of Habit",
            author: "Charles Duhigg",
            year: 2012,
        },
        {
            title: "Rich Dad Poor Dad",
            author: "Charles Duhigg",
            year: 1997,
        },
        {
            title: "The Psychology of Money",
            author: "Morgan Housel",
            year: 2020,
        },
        {
            title: "Indistractable",
            author: "Nir Eyal",
            year: 2019,
        },
    ]
};

console.log(library);

// Task 6

console.log(`Our library is named in respect to Professor Clover and is named as ${library.name}`)


// Using spread operator(...) and map() to get the book titles

const bookTitles = [...library.books.map(book => book.title)];

console.log("Books in the library:");
console.log(bookTitles);

// Books in the library:
// [
//   'Atomic Habits',
//   'The Power of Habit',
//   'Rich Dad Poor Dad',
//   'The Psychology of Money',
//   'Indistractable'
// ]

// Using forEach to get the book titles

function printBookTitles(library) {
    console.log("Books in the library:");
    library.books.forEach(book => {
        console.log(book.title);
    });
}

printBookTitles(library)

// Books in the library:
// Atomic Habits
// The Power of Habit
// Rich Dad Poor Dad
// The Psychology of Money
// Indistractable