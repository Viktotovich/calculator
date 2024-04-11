



//basic functions for adding, subtracting, multiplying, and dividing
// a + b / a-b etc etc super easy and works for a basic click-type calculator. But I want the user to type, what happens if the user types multiple calculations? a - b - c, would it be a = (a - b), a -c? or just spread: [a, b, c] where a - b - c happen simultaniously

//Need time to write algorithm on paper
function addition(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

function subtraction(...args) {
    let sum = 0;
    for (let arg of args) sum -= arg;
    return sum;
}

//https://www.w3schools.com/js/js_function_parameters.asp