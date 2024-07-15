// Challenge 3 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197081

// This code file will only contain feature request 2 i.e. task 2 and also contains task 3

// Task 2

let age= Math.floor(Math.random()*99) // Age generator from age 0-98

if (age>=18) {
    console.log(`The age of the person is ${age} and hence CAN VOTE`);
}
else{
    console.log(`The age of the person is ${age} and hence CANNOT VOTE`);
}

// Task 3
console.log("**************************************************TASK 3*****************************************************")
let numArray=[12,85,54]
if (numArray[0] > numArray[1]) {
    if (numArray[0] > numArray[2]) {
        console.log(`${numArray[0]} is the largest from ${numArray}`);
    } else {
        console.log(`${numArray[2]} is the largest from ${numArray}`);
    }
}
else{
    if (numArray[1] > numArray[2]) {
        console.log(`${numArray[1]} is the largest from ${numArray}`);
    } else {
        console.log(`${numArray[2]} is the largest from ${numArray}`);
    }
}
    
