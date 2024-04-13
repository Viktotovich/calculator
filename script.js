
//key Functions
function add(a, b) {
    return parseInt(a + b);
}

function subtract(a, b) {
    return (a - b);
}

function multiply(a = 1, b = 1){
    return (a * b);
}

function divide(a = 1, b = 1){
    return(a / b);
}

//key global variables:
let firstNumber = 0;
let operator = '';
let secondNumber = 0;

//Selecting display variables
let oldValue = document.querySelector(".oldValue");
let currentValue = document.querySelector(".currentValue");

//Selecting the buttons
let userInputNumber = document.querySelector(".calculatorButtonsContainer");

//heart of operations, func to callback on every operation
function operate(firstNumber, operator, secondNumber){
     switch (operator) {
        case "+":
            return add(firstNumber, secondNumber)
        case "-":
            return subtract(firstNumber, secondNumber)
        case "×":
            return multiply(firstNumber, secondNumber)
        case "/": 
            return divide(firstNumber, secondNumber)
        case "%": 
            return firstNumber / 100;
    }
}

//display morphs if we don't
currentValue.textContent = 0;
oldValue.textContent = 0;

userInputNumber.addEventListener("click", getUserNumber) 

function getUserNumber(e) {
    //multiple functions with different purposes: one if a number is clicked, another if an operator is clicked, and another if a function is clicked

    if (e.target.className == "number") {
        if (operator == '') {
            //the a of the equation, is the current number on display
            currentValue.textContent += e.target.textContent;
            firstNumber = currentValue.textContent;
        } else {
            currentValue.textContent += e.target.textContent;
            secondNumber = currentValue.textContent;
        }
        //operator assign-er is perfect, don't touch
    } else if (e.target.className == "operator") {
            operator = e.target.textContent;
            oldValue.textContent = firstNumber;
            currentValue.textContent = secondNumber;
        }
    };




//a user has to be able to click multiple buttons, to allow for multiple digit numbers, and then select the operand, and then the second number

//the calculation is done only after user clicks the equality button



//https://www.w3schools.com/js/js_function_parameters.asp
//Take time to plan the structure