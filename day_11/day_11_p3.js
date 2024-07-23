// Challenge 11 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197191

// This code file will only contain feature request 3 i.e. tasks 4,5

// Task 4

const asyncResolve =async () =>{
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Async function resolved after 2 seconds');
        }, 2000);
    });
    console.log ("hi")
    const result = await promise;
    return result
};

console.log ("Hello")

asyncResolve().then((message) => {console.log(message)})

console.log ("Hello Hi")

// Hello
// hi
// Hello Hi
// // 2 seconds later
// Async function resolved after 2 seconds

// Task 5

const asyncReject = async () => {
    const promise = new Promise((_, reject) => {
        setTimeout(() => {
            reject('Async function rejected after 2 seconds');
        }, 2000);
    });

    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};

asyncReject();


// Hello
// hi
// Hello Hi
// // 2 seconds later
// Async function resolved after 2 seconds
// Async function rejected after 2 seconds