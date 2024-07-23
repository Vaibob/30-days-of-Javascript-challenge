// Challenge 11 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197191

// This code file will only contain feature request 2 i.e. tasks 3

// Task 3

const fetchData = (message, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
};

fetchData('Fetching data from server...', 1000).then((response) => {console.log(response);
    return fetchData('Processing data...', 2000);}).then((response) => {console.log(response);
        return fetchData('Data fetched successfully!', 3000);}).then((response) => console.log(response))  // fetchData().then().then().then()