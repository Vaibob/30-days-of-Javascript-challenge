// Challenge 11 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197191

// This code file will only contain feature request 4 i.e. tasks 6 , 7

// Task 6

// API used : https://jsonplaceholder.typicode.com/

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));


// Task 7

const fetchDataAsync = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
};

fetchDataAsync();


// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }