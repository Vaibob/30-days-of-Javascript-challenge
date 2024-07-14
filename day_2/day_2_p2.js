// This code file will only contain feature request 2 i.e have tasks eight to thirteen

// Activity 3

let num1=3
let num2=2

console.log(`Is ${num1} greater than ${num2}: ${num1>num2}`);
console.log(`Is ${num1} lesser than ${num2}: ${num1<num2}`);
let num1Altered=num1-Number(Math.random().toFixed(1))
let num2Altered=num2+Number(Math.random().toFixed(1)) // num2+Math.random().toFixed(1) //would not work as .toFixed(1) creates a string and when we use + operator there is concatenation changing the value of the number 
// A rule of thumb is always have the same datatypes compares or operated
console.log(typeof(num2+Math.random().toFixed(1)));// this would give string as number + string = concatenated string (thus changing the expected sum value) in this case the expected sum was meant to be from (2,3) but became (20,21) so we need to use the type conversion Number
console.log(`Is ${num1Altered} greater than or equal to ${num2Altered}: ${num1Altered>=num2Altered}`); //line 14
console.log(`Is ${num1Altered} lesser than or equal to ${num2Altered}: ${num1Altered<=num2Altered}`); //line 15

// Sample output to demonstrate line 14 and line 15  :
// Is 2.8 greater than or equal to 2.8: true
// Is 2.8 lesser than or equal to 2.8: true

let newSymbol= Symbol(26)
let newSymbolDoppelganger = 26
console.log(`Demonstration of Symbol's being always unique, so when a Symbol is compared with a Number the result is: ${newSymbol==newSymbolDoppelganger}`); //false //A symbol is always unique

let birthdate="26092000"
let birthdateDoppelganger=26092000
console.log(`When we loosely equalte ${birthdate} which is a string with ${birthdateDoppelganger} which is a number the result is: ${birthdate==birthdateDoppelganger}`);// true
// In JavaScript, when you compare a string and a number using the == operator (loose equality), JavaScript performs type coercion to convert both values to the same type before comparing them. In this case, the string "26092000" is coerced to the number 26092000, resulting in a true comparison.
console.log(`When we strictly equalte ${birthdate} which is a string with ${birthdateDoppelganger} which is a number the result is: ${birthdate===birthdateDoppelganger}`); // false
// If we want to compare without type coercion, you should use the strict equality operator (===). This operator checks both the value and the type.

// Activity 4

// AND (&&)
console.log(true && true); //true
// console.log(true && false); //false
// console.log(false && true); //false
// console.log(false && false); //false

// OR (||)
console.log(false || false); //false
// console.log(true || true); //true
// console.log(true || false); //true
// console.log(false || true); //true

// NOT (!)
console.log(!true); //false
// console.log(!false); //true