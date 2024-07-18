// Challenge 6 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197124

// This code file will only contain feature request 3 i.e. tasks 12 , 13

// Task 12

console.log("An identity matrix is a matrix which when multiplied by any matrix results in the same matrix, and an identity matrix 'I' looks like : ")

let matrix = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
];

console.log(matrix); // [ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ] ]

// Task 13

console.log("Now let's access all the elements of the matrix that are 1")
console.log(`Element I(1,1) is : ${matrix[0][0]}`) // Element I(1,1) is : 1
console.log(`Element I(2,2) is : ${matrix[1][1]}`) // Element I(2,2) is : 1
console.log(`Element I(3,3) is : ${matrix[2][2]}`) // Element I(3,3) is : 1