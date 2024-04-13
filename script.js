
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
       case "÷": 
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
    } else if (e.target.className == "operator") {
            //operator is whatever operator user clicks on
            operator = e.target.textContent;
            // incase user adds numbers or modifies the sum 
            firstNumber = currentValue.textContent;
            //move user number and assign it to a
            oldValue.textContent = firstNumber;
            //make space for value b
            currentValue.textContent = 0;
    } else if (e.target.className == "utility") {
        if (e.target.textContent == "%") {
            currentValue.textContent = (firstNumber / 100).toFixed(5);
            firstNumber = currentValue.textContent;
        } else if (e.target.textContent == ".") {
            //bug of allowing multiple dots
            currentValue.textContent += ".";
            firstNumber = currentValue.textContent;
        } else if (e.target.textContent == '+/-') {
            //work of genius
            currentValue.textContent *= -1
            firstNumber = currentValue.textContent;
        }
    }
    };

// the 0 is causing too many problems, starting from displaying 0x
function getRidOfZero() {
    if (currentValue.textContent == 0) {
        currentValue.textContent = '';
    } else if (currentValue.textContent == "Can't Divide 0's") {
        //was bug, now a feature, fixed enough to not be a hinderance 
        currentValue.textContent = '';
        oldValue.textContent = 0;
        firstNumber = 0;
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

function noDuplicates() {
        if (firstNumber.toString().includes(".")) {
            return false
        } else {
            return true;
        }
}
