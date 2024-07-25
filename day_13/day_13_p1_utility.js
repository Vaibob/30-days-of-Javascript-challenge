// Challenge 13 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197208

// This code file will only contain feature request 1 i.e. tasks 1 , 2

// Task 1 

// This is the file which contains the add() which will be used as a module in some other file

module.exports.addition = function(num1 , num2) {
    return num1 + num2
    
}

// Task 2

const user = {
    name: "Vaibhav",
    age: 23,
    isLoggedIn: true,
    greeting: function() {
        if (this.isLoggedIn) {
            console.log(`The user ${this.name} is very diligent and is still working.`);
        } else {
            console.log(`The user ${this.name} has called it a day and has logged out.`);
        }
    },
    salary: 50000,
    salaryInHand: function() {
        const taxRate = 0.3;
        let netSalary = typeof this.salary === "number" ? this.salary - (this.salary * taxRate) : "Error: Invalid salary entry";
        return `The net salary ${this.name} gets is ${netSalary}`;
    }
};

module.exports.userData = user;

