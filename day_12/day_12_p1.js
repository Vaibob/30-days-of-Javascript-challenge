// Challenge 12 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197197

// This code file will only contain feature request 1 i.e. tasks 1 , 2, 3

// Task 1

function throwError() {
    try {
        throw new Error("This is an intentional error");
    } catch (error) {
        console.error("Caught an error:", error.message);
    }
}

throwError();

// Task 2

function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Denominator cannot be zero");
        }
        console.log(`The division is ${a/b}`)
    } catch (error) {
        console.error("Caught an error:", error.message);
    }
}

divideNumbers(4, 2); // Should print 2
divideNumbers(4, 0); // Should print error message

// Task 3

function tryCatchFinally() {
    try {
        console.log("Inside try block");
        throw new Error("An error occurred");
    } catch (error) {
        console.error("Caught an error:", error.message);
    } finally {
        console.log("Finally block executed");
    }
}

tryCatchFinally();
