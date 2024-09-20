
//javascript logic for the calculator
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '0';
let operator =  null;
let firstOperand =  null;

buttons.forEach(button =>{
    button.addEventListener('click',() => {
        const buttonValue =  button.textContent;

        if (buttonValue === 'AC'){
            currentInput = '0';
            opertor = null;
            firstOperand = null;
        }else if (buttonValue === 'DEL'){
            currentInput = currentInput.slice(0, -1);
            if (currentInput === "") {
                currentInput = '0';
            }
        } else if (buttonValue ==='=') {
            if (operator && firstOperand !== null){
                currentInput = eval(firstOperand + operator + currentInput);
                operator = null;
                firstOperand = null;

            }
        } else if (['+','-','*','/','%'].includes(buttonValue)) {
            if (firstOperand ===  null) {
                firstOperand = currentInput;

            } else {
                firstOperand = eval(firstOperand + operator + currentInput);

            }
            operator = buttonValue;
            currentInput = '0';
        }else {
            if (currentInput === '0') {
                currentInput = buttonValue;
            }else {
                currentInput += buttonValue;
            }
        }
        display.textContent = currentInput;
    });
});
