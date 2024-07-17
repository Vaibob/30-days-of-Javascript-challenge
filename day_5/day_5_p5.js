// Challenge 5 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197105

// This code file will only contain feature request 5 i.e. task 9 and also has task 10

// Task 9

const repeat = (times, func) => {
    for (let i = 0; i < times; i++) {
        func();
    }
};

//this is 'func'
const sayHello = () => console.log("Hello!");

repeat(5, sayHello); // Output: "Hello!" will be printed 5 times

// Task 10

const chainReaction=(func1,func2,val) =>{
    let result=func1(val)
    console.log(result); // Hi, my name is Vaibhav
    return func2(result)
}

// This is 'val'
let name ="Vaibhav"

// This is 'func1'
const greet =(someValue) => (`Hi, my name is ${someValue}`)

// This is 'func2'
const importantMessage =(motive) => (`${motive} and I am a Learner`)

console.log(chainReaction(greet,importantMessage,name)) // Hi, my name is Vaibhav and I am a Learner


