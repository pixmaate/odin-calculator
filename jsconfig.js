const numberButtons = document.querySelector('.mainButtons');

numberButtons.addEventListener('click', (event) =>{
    alert(event.target.textContent)
});


let numberOne = 0;
let numberTwo = 0;
let operator = '';


function add(inputOne,inputTwo) {
    return inputOne + inputTwo
}

function subtract(inputOne,inputTwo) {
    return inputOne - inputTwo
}

function multiply(inputOne,inputTwo) {
    return inputOne * inputTwo
}

function divide(inputOne,inputTwo) {
    return inputOne / inputTwo
}

function calculate(inputOne, inputTwo, operator) {
    numberOne = inputOne;
    numberTwo = inputTwo;
    switch(operator) {
        case '+':
            return add(numberOne, numberTwo);
        case '-':
            return subtract(numberOne, numberTwo);
        case '*':
            return multiply(numberOne, numberTwo);
        case '/':
            return divide(numberOne, numberTwo);
    };
}