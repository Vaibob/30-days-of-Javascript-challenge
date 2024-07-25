// // Challenge 13 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197208

// // This code file will only contain feature request 1 i.e. tasks 1 , 2

// Task 1

const { addition, userData } = require("./day_13_p1_utility");

const result = addition(55, 88);
console.log(`The sum of 55 and 88 is ${result}`); // The sum of 55 and 88 is 143

// Task 2
console.log(Object.keys(userData)); // Outputs the keys of the userData object

// Display user information
userData.greeting();
console.log(userData.salaryInHand());
