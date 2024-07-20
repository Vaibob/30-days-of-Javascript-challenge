// Challenge 8 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197148

// This code file will only contain feature request 3 i.e. tasks 5 , 6

// Task 5

const fruit = ["apple", "banana", "cherry"]

let updatedFruits = [...fruit, "dragon fruit", "papaya", "guava", "melon"]

console.log('The initial array was:')
console.log(fruit)  
console.log("and the updated array is:")
console.log( updatedFruits)

// Task 6

let total = 0
function summation(...params) {
    params.forEach(param => {
        total=total+param
    });
    console.log(`The parameters were ${params} and their summation is ${total}`)
        
    }

summation(1,2,3,4,5,6,7,8,9,10) // The parameters were 1,2,3,4,5,6,7,8,9,10 and their summation is 55