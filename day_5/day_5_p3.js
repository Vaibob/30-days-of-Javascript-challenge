// Challenge 5 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197105

// This code file will only contain feature request 3 i.e. task 4 and also has task 7

// Task 4

const concatenation=function (str1, str2){
    // return `The concated string after concatenation of ${str1} and ${str2} is ${str1+str2}`
    return `The concated string after concatenation of ${str1} and ${str2} is ${str1.concat(str2)}`
}

console.log(concatenation("Hello"," World!")) // The concated string after concatenation of Hello and  World! is Hello World!

// Task 7

const product=function (num1,num2=10) {
    return `The product of the numbers ${num1} and ${num2} is ${num1*num2}`
}

console.log(product(33,2)); // The product of the numbers 33 and 2 is 66
console.log(product(3,9)); // The product of the numbers 3 and 9 is 27
console.log(product(42)); // The product of the numbers 42 and 10 is 420