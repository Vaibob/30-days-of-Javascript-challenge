// Challenge 11 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197191

// This code file will only contain feature request 5 i.e. tasks 8 , 9

// Task 8

const promise1 = new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), 2000));
const promise3 = new Promise(resolve => setTimeout(() => resolve('Promise 3 resolved'), 3000));


Promise.all([promise1, promise2, promise3])
    .then(values => console.log(values))
    .catch(error => console.error(error));  //[ 'Promise 1 resolved', 'Promise 2 resolved', 'Promise 3 resolved' ]

// Task 9

const promiseA = new Promise(resolve => setTimeout(() => resolve('Promise A resolved'), 1000));
const promiseB = new Promise(resolve => setTimeout(() => resolve('Promise B resolved'), 2000));
const promiseC = new Promise(resolve => setTimeout(() => resolve('Promise C resolved'), 3000));

Promise.race([promiseA, promiseB, promiseC])
    .then(value => console.log(value))
    .catch(error => console.error(error)); // Promise A resolved
