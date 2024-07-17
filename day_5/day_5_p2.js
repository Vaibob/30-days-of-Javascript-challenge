// Challenge 5 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197105

// This code file will only contain feature request 2 i.e. task 2 and also has task 3

// Task 2

/*
A function declaration is something like:

function functionName(parameters) {
    // Function body
}

*/

function squareNum(num) {
    return num * num;
}

let squaredNum = squareNum(4);
console.log(`The square of 4 is ${squaredNum}`); //The square of 4 is 16

// Task 3

/*
A function expression is something like:

const functionName = function(parameters) {
    // Function body
};

*/

const maxNum = function(num1,num2){
    if (num1>num2) {
        console.log(`${num1} is the maximum from ${num1} and ${num2}`);
    } else {
        console.log(`${num2} is the maximum from ${num1} and ${num2}`);
    }
}

maxNum(2,3) // 3 is the maximum from 2 and 3
maxNum(9,3) // 9 is the maximum from 9 and 3