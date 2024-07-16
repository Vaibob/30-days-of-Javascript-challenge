// Challenge 4 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197093

// This code file will only contain feature request 3 i.e. task 7


for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        process.stdout.write("*"); // In JavaScript, the equivalents of System.out.println and System.out.print from Java are console.log and process.stdout.write respectively.
    }
    console.log()
    
}

// A different approach
console.log("----------------------------------------------------------------------------------------------------------------------------------");

let eachLine=""
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        eachLine = eachLine+"*"
    }
    eachLine=eachLine+"\n" //in JavaScript, you can use the newline character \n to create a new line within a string
    
}
console.log(eachLine);