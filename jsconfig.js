const numberButtons = document.querySelector('#calculatorBody');
const topText = document.querySelector('#textTop');
const bottomText = document.querySelector('#textBottom');
const isNumber = new RegExp("^[0-9]$");

topText.textContent = '';
bottomText.textContent = '';

let isCalculated = false;
let calcArray = [];
let numberOne = 0;
let numberTwo = 0;
let operator = '';

numberButtons.addEventListener('click', (event) =>{
    if (isNumber.test(event.target.textContent)) {
        if (isCalculated) {
            isCalculated = false;
            bottomText.textContent = '';
            bottomText.textContent += event.target.textContent;
        }
        else {
            bottomText.textContent += event.target.textContent;
        };
    };
    switch(event.target.textContent) {
        case 'C':
            topText.textContent = '';
            bottomText.textContent = '';
            break;
        case '+':
            if (topText.textContent === '') {
                numberOne = bottomText.textContent;
                operator = '+';
            }
            topText.textContent = bottomText.textContent;
            bottomText.textContent = '';
            break;
        case '-':
            if (topText.textContent === '') {
                numberOne = bottomText.textContent;
                operator = '-';
            }
            topText.textContent = bottomText.textContent;
            bottomText.textContent = '';
            break;
        case '*':
            if (topText.textContent === '') {
                numberOne = bottomText.textContent;
                operator = '*';
            }
            topText.textContent = bottomText.textContent;
            bottomText.textContent = '';
            break;
        case '/':
            if (topText.textContent === '') {
                numberOne = bottomText.textContent;
                operator = '/';
            }
            topText.textContent = bottomText.textContent;
            bottomText.textContent = '';
            break;
        case '=':
            numberTwo = bottomText.textContent;
            topText.textContent = ''
            bottomText.textContent = calculate(+numberOne, +numberTwo, operator)
    };

});





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
    isCalculated = true;
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