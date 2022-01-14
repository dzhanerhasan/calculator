function operate(operator, firstNum, secondNum) {
    if (operator === "+") {
        return firstNum + secondNum;
    }
    else if (operator === "-") {
        return firstNum - secondNum;
    }
    else if (operator === "*") {
        return firstNum * secondNum;
    }
    else if (operator === "/") {
        return firstNum / secondNum;
    }
}

let display = document.querySelector('.display');
const digits = document.querySelectorAll('.digit');
const operator = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

let firstNum = '';
let secondNum = '';
let initOperator = '';
let conseqOperator = '';

digits.forEach((button) => {
    button.addEventListener('click', function(event) {        
        if (!initOperator) {
            firstNum += button.textContent;
            display.textContent = firstNum;
        }
        else {
            secondNum += button.textContent;
            display.textContent = secondNum;
        }
    });
});

operator.forEach((button) => {
    button.addEventListener('click', function(event) {
        if (!initOperator) {
            initOperator = button.textContent;
        }
        else {
            conseqOperator = button.textContent;
            let result = operate(initOperator,
                parseFloat(firstNum),
                parseFloat(secondNum));
            display.textContent = result;
            firstNum = result;
            secondNum = '';
            initOperator = conseqOperator;
        }
    });
});

equals.addEventListener('click', function() {
    let result = operate(initOperator,
        parseFloat(firstNum),
        parseFloat(secondNum));
    display.textContent = result;
    firstNum = result;
    secondNum = '';
});

clear.addEventListener('click', function() {
    display.textContent = ''; 
    initOperator = '';
    firstNum = '';
    secondNum = ''; 
    conseqOperator = '';
});