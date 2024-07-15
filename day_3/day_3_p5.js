// Challenge 3 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197081

// This code file will only contain feature request 5 i.e. task 7

// Task 7

let year = Math.floor(Math.random()*2899) //generates years from 0 to 2898 AD

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(`The year ${year} is a leap year`);
        } else {
            console.log(`The year ${year} is not a leap year`);
        }
    } else {
        console.log(`The year ${year} is a leap year`);
    }
} else {
    console.log(`The year ${year} is not a leap year`);
}
