// Challenge 11 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197191

// This code file will only contain feature request 1 i.e. tasks 1 and 2

// Task 1

console.log("Trying to connect to the DB!");
function makingDbConnection() {
    return new Promise((resolve , reject) => { setTimeout(() => {
        resolve("CONNECTION ESTABLISHED...")
    }, 2000);
})
}

makingDbConnection()
  .then((result) => {
    console.log(result); // Log the resolved value
  })


// Task 2

const rejectPromise = new Promise((_,reject) => {
    setTimeout(() => {
        reject('Promise rejected after 2 seconds');
    }, 2000);
});

rejectPromise.catch((error) => console.error(error));
