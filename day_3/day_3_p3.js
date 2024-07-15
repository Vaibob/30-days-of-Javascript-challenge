// Challenge 3 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197081

// This code file will only contain feature request 3 i.e. task 4

// Task 4

let dayCode = Math.floor(Math.random() * (7 - 1 + 1)) + 1; // This will create random integers from 1-7

switch (dayCode) {
    case 1:
        console.log(`Today is a Monday and its code is ${dayCode}`);
        break;
    case 2:
        console.log(`Today is a Tuesday and its code is ${dayCode}`);
        break;
    case 3:
        console.log(`Today is a Wednesday and its code is ${dayCode}`);
        break;
    case 4:
        console.log(`Today is a Thursday and its code is ${dayCode}`);
        break;
    case 5:
        console.log(`Today is a Friday and its code is ${dayCode}`);
        break;
    case 6:
        console.log(`Today is a Saturday and its code is ${dayCode}`);
        break;
    case 7:
        console.log(`Today is a Sunday and its code is ${dayCode}`);
        break;
    default:
        console.log(`Unexpected value :${dayCode}`) 
        break;
}