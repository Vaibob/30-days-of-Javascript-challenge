// Challenge 4 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197093

// This code file will only contain feature request 2 i.e. task 2 and also contains Activity 5 i.e task 8 and task 9

// Task 2

for (let index = 0; index <=12; index++) {
    console.log(`5 * ${index} = ${5*index}`)
}


// Task 8
console.log("The numbers from 1-10 skipping 5 are :")
for (let index = 1; index <=10; index++) {
    if (index===5) continue
    console.log(index);
}

// Task 9
console.log("The numbers from 1-10 but breaking the loop once 7 is reached are :")
for (let index = 1; index <=10; index++) {
    if (index===7) break
    console.log(index);
}