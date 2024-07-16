// Challenge 4 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197093

// This code file will only contain feature request 5 i.e. task 6

// Task 6

let someNumber = 7, fact = 1, index = 1;

do {
    fact=fact*index
    index=index+1    
} while (index<=someNumber);

console.log(`The factorial of ${someNumber} is ${fact}`);