
//key Functions
function add(a, b) {
    total = [+a, +b];
    return total.reduce((sum, item) => sum += item)
}

function subtract(a, b) {
    return (a - b);
}

function multiply(a = 1, b = 1){
    return (a * b);
}

function divide(a, b){
    if (a == 0 || b == 0) {
        alert("it got here")
        return "Can't Divide 0's"
    } else {
    return(a / b);
    }
}

//key global variables:
let firstNumber = 0;
let operator = '';
let secondNumber = 0;

//Selecting display variables
let oldValue = document.querySelector(".oldValue");
let currentValue = document.querySelector(".currentValue");
let calculateButton = document.querySelector(".calculateButton");
let clear = document.querySelector("#clear");

//Selecting the buttons
let userInputNumber = document.querySelector(".calculatorButtonsContainer");


//display morphs if we don't
currentValue.textContent = 0;
oldValue.textContent = 0;

clear.addEventListener("click", clearCalculator)
userInputNumber.addEventListener("click", getUserNumber) 
calculateButton.addEventListener("click", getResult)


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

function getUserNumber(e) {
    if (e.target.className == "number") {
        getRidOfZero();
        if (operator == '') {
            //the a of the equation, is the current number on display
            currentValue.textContent += e.target.textContent;
            firstNumber = +currentValue.textContent;
        } else {
            //if operator exists, make the number the b of the equation
            currentValue.textContent += e.target.textContent;
            secondNumber = currentValue.textContent;
        }
        //operator assign-er is perfect, don't touch
    } else if (e.target.className == "operator") {
            operator = e.target.textContent;
            oldValue.textContent = firstNumber;
            currentValue.textContent = 0;
        }
    };

// the 0 is causing too many problems, starting from displaying 0x
function getRidOfZero() {
    if (currentValue.textContent == 0) {
        currentValue.textContent = '';
    }
}

function getResult() {
    if (operator != '') {
        let result = operate(firstNumber, operator, secondNumber)
        oldValue.textContent = `${firstNumber} ${operator} ${secondNumber} `
        currentValue.textContent = result;
        firstNumber = result;
    }
}

function clearCalculator(){
    firstNumber = 0;
    secondNumber = 0;
    currentValue.textContent = 0;
    oldValue.textContent = 0;
    operator = '';
}
    
//a user has to be able to click multiple buttons, to allow for multiple digit numbers, and then select the operand, and then the second number

//the calculation is done only after user clicks the equality button



//https://www.w3schools.com/js/js_function_parameters.asp
//Take time to plan the structure