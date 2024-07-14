// This code file will only contain feature request 3 i.e have task fourteen

// Ternary operators : condition ? expressionIfTrue : expressionIfFalse

let smallDecimal1 = Number(Math.random().toFixed(1))
console.log(smallDecimal1);
let smallDecimal2 = Number(Math.random().toFixed(1))
console.log(smallDecimal2);
let difference = (smallDecimal1 - smallDecimal2).toFixed(1)
let result = difference >= 0 ? difference+" is a non negative number" : difference+" is a negative number";
console.log(result);