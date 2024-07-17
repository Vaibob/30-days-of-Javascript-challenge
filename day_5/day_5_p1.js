// Challenge 5 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197105

// This code file will only contain feature request 1 i.e. task 1 and also has task 8

// Task 1

function evenOdd(num) {
    if (num%2===0) {
        console.log(`The number ${num} is an even number`);
    } else {
        console.log(`The number ${num} is an odd number`);
    }
    
}

evenOdd(29) // The number 29 is an odd number
evenOdd(88) // The number 88 is an even number
evenOdd(0) // The number 0 is an even number

// Task 8

function greetings(name, age=23) {
    console.log(`Hi ${name}, we are proud of you being a ${age} year old Learner!`)
    
}

greetings("Vaibhav") // Hi Vaibhav, we are proud of you being a 23 year old Learner!
greetings("Vaibhav Shelar", 19) // Hi Vaibhav Shelar, we are proud of you being a 19 year old Learner!
