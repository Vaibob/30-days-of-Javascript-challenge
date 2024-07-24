// Challenge 12 : https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197197

// This code file will only contain feature request 4 i.e. tasks 8 , 9

// Task 8

// Task 8

fetch("https://invalid-url.com") // // When fetch fails due to network issues, it will throw an error directly.
    .then((response) => {
        if (!response.ok) {
            throw new Error("1. Network response was not ok"); // If the fetch call succeeds but the response is not ok, you'll handle that separately.
        }
        return response.json();
    })
    .catch(error => console.error("Caught an error 1:", error.message));


// Task 9

async function fetchData() {
    try {
        const response = await fetch("https://invalid-url.com");
        if (!response.ok) {
            throw new Error("2. Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Caught an error 2:", error.message);
    }
}

fetchData();

