// Challenge 12 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197197

// This code file will only contain feature request 2 i.e. tasks 4 , 5

// Task 4

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwCustomError() {
    try {
        throw new CustomError("This is a custom error");
    } catch (error) {
        console.error("Caught an error:", error.name,":", error.message);
    }
}

throwCustomError();

// Task 5

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateInput(input) {
    try {
        if (input.trim() === "") {
            throw new ValidationError("Input cannot be empty");
        }
        console.log("Input is valid:", input);
    } catch (error) {
        console.error("Caught an error:", error.name,":", error.message);
    }
}

validateInput(""); // Caught an error: ValidationError Input cannot be empty
validateInput("Valid input"); // Input is valid: Valid input
