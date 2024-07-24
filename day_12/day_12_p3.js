// Challenge 12 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197197

// This code file will only contain feature request 3 i.e. tasks 6 , 7

// Task 6

function createPromise() {
    return new Promise((resolve, reject) => {
        const randomValue = Math.random();
        if (randomValue > 0.5) {
            resolve("Promise resolved successfully");
        } else {
            reject("Promise rejected");
        }
    });
}

createPromise()
    .then((result) => console.log("1. "+result))
    .catch((error) => console.error("Caught an error 1:", error));

// Task 7

async function handlePromise() {
    try {
        const result = await createPromise();
        console.log("2. "+result);
    } catch (error) {
        console.error("Caught an error 2:", error);
    }
}

handlePromise();
