



//Go for MVP
//Need time to write algorithm on paper


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

let firstNumber = 0;
let operator;
let secondNumber = 0;


// the operator must somehow store the operator names, i.e: operator should be = addition, or subtraction, etc. 

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
    }
}

// old number must be above the new number, so user can see what they are operating on
//old number smaller, and greyed out, in a separate div

//Defining display variable
let oldValue = document.querySelector(".oldValue");
let currentValue = document.querySelector(".currentValue");
let userInputNumber = document.querySelector(".calculatorButtonsContainer");

//these said variables must change upon user input
userInputNumber.addEventListener("click", getUserNumber) 
//need to fix self-induced bug, cut down variable names in HTML to be specific so that getUserNumber can identify which are numbers, operators, and which are functions


function getUserNumber(e) {
    //multiple functions with different purposes: one if a number is clicked, another if an operator is clicked, and another if a function is clicked

    //doesnt work as intended, re-write this but take inspiration before deleting
    if (e.target.className == "number") {
        currentValue.textContent = e.target.textContent;
        firstNumber = currentValue.textContent;
    } else if (e.target.className == "operator") {
        oldValue.textContent = currentValue.textContent;
        currentValue.textContent = operate(firstNumber, e.target.textContent, secondNumber);
        secondNumber = currentValue.textContent
        }
    

    //a user has to be able to click multiple buttons, to allow for multiple digit numbers, and then select the operand, and then the second number
    };



// Assign number as per what user has clicked
function assignNumber(e) {

}

//https://www.w3schools.com/js/js_function_parameters.asp
//Take time to plan the structure