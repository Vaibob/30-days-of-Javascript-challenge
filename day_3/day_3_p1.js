// Challenge 3 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197081

// This code file will only contain feature request 1 i.e. task 1

// Task 1

let someNumber = -3 + Math.floor(Math.random() * 7);

if (someNumber > 0) {
    console.log(`POSITIVE INTEGER : ${someNumber}`);
} else if (someNumber === 0) {
    console.log(`ZERO INTEGER : ${someNumber}`);
} else {
    console.log(`NEGATIVE INTEGER : ${someNumber}`);
}
