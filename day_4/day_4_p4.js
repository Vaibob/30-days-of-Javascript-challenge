// Challenge 4 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197093

// This code file will only contain feature request 4 i.e. task 3 and also has task 5

// Task 3

let sum=0 , digit=1

while (digit<=10) {
    sum=sum+digit
    digit=digit+1
}
console.log(`The sum of digits from 1-10 is ${sum}`);

// Task 5

let index=1
console.log("The digits from 1-5 are:");
do {
    console.log(index)
    index++
} while (index<=5);