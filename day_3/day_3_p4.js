// Challenge 3 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197081

// This code file will only contain feature request 4 i.e. task 5 and also has activity 4

// Task 5

let marks =Number((Math.random()*100).toFixed(2)) //Random marks generator from 0-100
// let marks=420 //Unexpected value : 420

switch (true) {
    case (marks > 80 && marks <= 100):
        console.log(`Congratulations your marks are ${marks} and your grade is A`);
        break;
    case (marks > 60 && marks <= 80):
        console.log(`Congratulations your marks are ${marks} and your grade is B`);
        break;
    case (marks > 40 && marks <= 60):
        console.log(`Congratulations your marks are ${marks} and your grade is C`);
        break;
    case (marks > 20 && marks <= 40):
        console.log(`Congratulations your marks are ${marks} and your grade is D`);
        break;
    case (marks >= 0 && marks <= 20):
        console.log(`Poor performance! Your marks are ${marks} and your grade is F`);
        break;

    default:
        console.log(`Unexpected value : ${marks}`)
        break;
}


// In switch:case the "key" is compared with "value" (refer to the syntax below for better understanding). Therefore, switch (true) allows each case to evaluate a boolean expression (True or False). This is a common trick to use switch for range-based checks. 

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// Task 6

console.log("**************************************************TASK 6*****************************************************")

let randomInt0_10 = Math.floor(Math.random()*11)

evenOdd= (randomInt0_10%2 ===0) ? randomInt0_10+" IS AN EVEN NUMBER" : randomInt0_10+" IS AN ODD NUMBER"
console.log(evenOdd);