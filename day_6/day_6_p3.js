// Challenge 6 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197124

// This code file will only contain feature request 3 i.e. tasks 10 , 11

// Task 10

let heros=["superman" , "batman" , "thor" , "antman"]

for (let i = 0; i < heros.length; i++) {
    console.log(heros[i])
    
}

// superman
// batman
// thor
// antman

// Task 11

console.log("--------------------------------------------------------------------------------------------------")

heros.forEach(element => (console.log(element.toUpperCase())) ) // I used upper case to differentiate between the outputs of both for blocks

// SUPERMAN
// BATMAN
// THOR
// ANTMAN
