// Challenge 5 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197105

// This code file will only contain feature request 4 i.e. task 5 and also has task 6

// Task 5

let sum=(num1,num2) => `The sum of ${num1} and ${num2} is ${num1+num2}`
console.log(sum(9,11)) // The sum of 9 and 11 is 20

// Task 6

let charPresent = (str, char) => (`The string ${str} have the character ${char} : ${str.includes(char)}`)
console.log(charPresent("Vaibhav","f")); // The string Vaibhav have the character f : false
console.log(charPresent("Vaibhav","a")); // The string Vaibhav have the character a : true