// Challenge 13 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197208

// This code file will only contain feature request 2 i.e. tasks 3 , 4

// Task 3

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function sayHi(till) {
    for (let index = 0; index < till; index++) {
       console.log("hi")  
    }
    
}
// exports.<Module anme you will use where ever you import it> = <the nsmae of object/function being exported in local file>
exports.addModule = add;
exports.subtractModule = subtract;
exports.hiModule =sayHi;

// Task 4 // assume it to be in some other file say day_13_p2_utility2.js

// function greet(name) {
//     return `Hello, ${name}`;
// // }
// module.exports = greet;
