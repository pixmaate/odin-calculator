const numberButtons = document.querySelector('.mainRows');
const topText = document.querySelector('#textTop');
const bottomText = document.querySelector('#textBottom');
const isNumber = new RegExp("^[0-9]$");

topText.textContent = '';
bottomText.textContent = ''; 

numberButtons.addEventListener('click', (event) =>{
    if (isNumber.test(event.target.textContent)) {
        bottomText.textContent += event.target.textContent;
    };
    switch(event.target.textContent) {
        case '+':
            topText.textContent = bottomText.textContent;
            bottomText.textContent = '';
            break;
        case '-':
            topText.textContent = bottomText.textContent;
            bottomText.textContent = '';
            break;
        case '*':
            topText.textContent = bottomText.textContent;
            bottomText.textContent = '';
            break;
        case '/':
            topText.textContent = bottomText.textContent;
            bottomText.textContent = '';
            break;
    };

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