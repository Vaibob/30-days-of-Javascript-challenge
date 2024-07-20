// Challenge 8 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197148

// This code file will only contain feature request 2 i.e. tasks 3 , 4

// Task 3 and 4


// Task 3
const fruit = ["apple", "banana", "cherry"];

// Destructuring the array

const [firstFruit, secondFruit] = fruit;

console.log(`First fruit: ${firstFruit}`); // First fruit: apple
console.log(`Second fruit: ${secondFruit}`); // Second fruit: banana

// Task 4

const book = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
}

// Destructuring an object

const { title: titleOfOurBook , author } = book; // In object destructuring we need to use the keys as variable names to destructure the object
// but we can use different variable names in this form... <key>:<new Variable name>

console.log(`TITLE: ${titleOfOurBook}`); // TITLE: Atomic Habits
console.log(`AUTHOR: ${author}`); // AUTHOR: James Clear
