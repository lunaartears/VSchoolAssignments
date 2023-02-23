const readlineSync = require("readline-sync");

let firstNum = readlineSync.question("Enter first number ");
let secondNum = readlineSync.question("Enter second number ");
let operation = readlineSync.question("Enter operation: +, -, *, / ");

function addTwo(num1, num2) {
    return parseInt(num1) + parseInt(num2)
};
function multiplyTwo(num1, num2) {
    return parseInt(num1) * parseInt(num2)
};
function divideTwo(num1, num2) {
    return parseInt(num1) / parseInt(num2)
};
function subtractTwo(num1, num2) {
    return parseInt(num1) - parseInt(num2)
};

if  (operation === "+") {
    console.log(addTwo(firstNum, secondNum))
};
if (operation === "*") {
    console.log(multiplyTwo(firstNum, secondNum))
};
if (operation === "/") {
    console.log(divideTwo(firstNum, secondNum))
};
if (operation === "-") {
    console.log(subtractTwo(firstNum, secondNum))
};
