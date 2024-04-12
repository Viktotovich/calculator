



//Go for MVP
//Need time to write algorithm on paper


//key Functions
function add(a, b) {
    return (a + b);
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

let firstNumber;
let operator;
let secondNumber;

function operate(firstNumber, operator, secondNumber){
    switch (operator) {
        case addition:
            add(firstNumber, secondNumber)
            break;
        case subtraction:
            subtract(firstNumber, secondNumber)
            break;
        case multiplication:
            multiply(firstNumber, secondNumber)
            break;
        case division: 
            divide(firstNumber, secondNumber)
    }
}

// old number must be above the new number, so user can see what they are operating on
//old number smaller, and greyed out, in a separate div


//https://www.w3schools.com/js/js_function_parameters.asp
//Take time to plan the structure