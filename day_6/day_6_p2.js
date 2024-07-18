// Challenge 6 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197124

// This code file will only contain feature request 2 i.e. tasks 7,8,9

// Task 7

let ourArr=[1,2,3,4,5]
let doubledArr = ourArr.map(num => num * 2);
console.log(doubledArr," is the doubled array of ",ourArr) // [ 2, 4, 6, 8, 10 ]  is the doubled array of  [ 1, 2, 3, 4, 5 ]

// Task 8

let evenArr = ourArr.filter(num => num % 2 === 0);
console.log(evenArr," is the even array filtered from ",ourArr) // [ 2, 4 ]  is the even array filtered from  [ 1, 2, 3, 4, 5 ]

// Task 9

let sum = ourArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`The sum of all elements of ${ourArr} is ${sum}`); // The sum of all elements of 1,2,3,4,5 is 15