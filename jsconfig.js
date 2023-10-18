const numberButtons = document.querySelector('#calculatorBody');
const topText = document.querySelector('#textTop');
const bottomText = document.querySelector('#textBottom');
const isNumber = new RegExp("^[0-9]$");
const hasDot = new RegExp("\\.");

topText.textContent = '';
bottomText.textContent = '';

let isCalculated = false;
let calcArray = [];
let numberOne = 0;
let numberTwo = 0;
let operator = '';
let memoryNumber = 0;

function setFontSize() {
    if (bottomText.textContent.length > 18) {
        bottomText.style.fontSize = '18px';
    }
    else {
        bottomText.style.fontSize = '24px';
    }
}

function calcEvaluate(inputOperator) {
    if (topText.textContent === '') {
        numberOne = bottomText.textContent;
        operator = inputOperator;
    }
    else if (operator === inputOperator) {
        topText.textContent = '';
        bottomText.textContent = calculate(+numberOne, +numberOne, operator);
        setFontSize();
        return;
    }
    topText.textContent = bottomText.textContent;
    bottomText.textContent = '';
    return;
};

numberButtons.addEventListener('click', (event) =>{

    // this part takes care of adding characters to the display
    if (isNumber.test(event.target.textContent)) {
        if (isCalculated) {
            isCalculated = false;
            bottomText.textContent = '';
            bottomText.textContent += event.target.textContent;
        }
        else {
            if (bottomText.textContent.length < 18) {
                bottomText.textContent += event.target.textContent;
            }
            else {
                return;
            }
        };
        
    }
    else if (event.target.textContent === '.' && !hasDot.test(bottomText.textContent)) {
        bottomText.textContent += ((bottomText.textContent != '') ? event.target.textContent : '0.');
    };




    // the main part where we decide what functions to call and do
    switch(event.target.textContent) {
        case 'C':
            topText.textContent = '';
            bottomText.textContent = '';
            setFontSize()
            break;
        case 'M':
            memoryNumber = bottomText.textContent;
            break;
        case 'MR':
            bottomText.textContent = memoryNumber;
            break;
        case '^2':
            numberOne = bottomText.textContent;
            operator = '**'
            bottomText.textContent = calculate(numberOne, numberTwo, operator);
            setFontSize()
            break;
        case 'D':
            bottomText.textContent = ((isCalculated) ? '' : bottomText.textContent.slice(0,-1));
            break;
        case '+':
            calcEvaluate('+');
            break;
        case '-':
            calcEvaluate('-');
            break;
        case '*':
            calcEvaluate('*');
            break;
        case '/':
            calcEvaluate('/');
            break;
        case '+/-':
            bottomText.textContent = '-' + bottomText.textContent;
            break;
        case '=':
            numberTwo = bottomText.textContent;
            topText.textContent = '';
            bottomText.textContent = calculate(+numberOne, +numberTwo, operator);
            setFontSize();
    };

});




// below are the available calculation logics along with the actual calculation decider function

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

function power(inputOne) {
    return inputOne ** 2;
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
        case '**':
            return power(numberOne);
    };
}