// Challenge 8 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197148

// This code file will only contain feature request 4 i.e. tasks 7

// Task 7

function twoProductuct(num1, num2=10) {
    console.log(`The product of ${num1} and ${num2} is ${num1*num2}`)
}

twoProductuct(5,8) // The product of 5 and 8 is 40
twoProductuct(11) // The product of 11 and 10 is 110  (num2 uses default value 10 as it is not passed as an argument)
