// Challenge 6 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197124

// This code file will only contain feature request 1 i.e. task 3,4,5,6 and also has task 1,2

// Task 1

let arr=[1,2,3,4,5]
console.log(arr); //[ 1, 2, 3, 4, 5 ]

// Task 2

console.log(`The first element of the array is ${arr[0]}`)
console.log(`The last element of the array is ${arr[arr.length - 1]}`)

// Task 3
arr.push(6)
console.log(`When we 'push' the element '6' to our array, the array is updated to ${arr}`) // When we 'push' the element '6' to our array, the array is updated to 1,2,3,4,5,6

// Task 4
arr.pop()
console.log(`When we 'pop' the last element from our newly updated array, we get the original array ${arr}`) // When we 'pop' the last element from our newly updated array, we get the original array 1,2,3,4,5

// Task 5
arr.shift()
console.log(`When we 'shift' the first element from our original array, we get the following array ${arr}`); // When we 'shift' the first element from our original array, we get the following array 2,3,4,5

// Task 6
arr.unshift(...[0,1]) // we are using the spread operator to show that we can add one or more elements using the spread operator 
// arr.unshift([0,1]) // This would give the resulting array as [[0,1],2,3,4,5]
console.log(`When we 'unshift' the first elements from our resulting array by [0,1], we get the following array ${arr}`); // When we 'unshift' the first elements from our resulting array by [0,1], we get the following array 0,1,2,3,4,5