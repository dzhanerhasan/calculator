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

const operatorArr = ["+", "-", "/", "*"]

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function(event) {
        let display = document.querySelector('.display');
        if (!button.textContent in operatorArr) {
        let equation = document.createElement('div');
        equation = equation.textContent.concat(button.textContent);
        }
    });
});