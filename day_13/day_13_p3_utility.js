// Challenge 13 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197208

// This code file will only contain feature request 2 i.e. tasks 5

// Task 5

const PI = 3.14;
const E = 2.71;

function circleArea(radius) {
    return PI * radius * radius;
}

function naturalLog(value) {
    return Math.log(value) / Math.log(E);
}

module.exports = {
    PI,
    E,
    circleArea,
    naturalLog
}; // can be exported as an object with multiple functions or constants 

// module.exports = [PI , E , circleArea , naturalLog] // does not work when tried to export as an array
