// Challenge 13 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197208

// This code file will only contain feature request 3 i.e. tasks 6 , 7

// Task 6

const _ = require('lodash');
const arr = [1, 2, 3, 4];
const doubled = _.map(arr, n => n * 2);
console.log(doubled); // Output: [2, 4, 6, 8]

// Task 7

const axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


/*
[ 2, 4, 6, 8 ]
{
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'
}

*/