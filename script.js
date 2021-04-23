
const add = (a, b) => a+b;
const subtract = (a, b) => a-b;
const multiply = (a, b) => a*b;
const divide = (a, b) => {
    if (b === 0) {
        alert('YOU NEED SUPER POWERS FOR THAT!!!');
        return '';
    }
    return a/b;
};

const operate = (operator, a, b) => operator(a, b);

/** calculator STATUS BEGIN */
const supportedOperators = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide,
};
let periodUsed = false;
let selectedOperator = '';
let accumulator = '';
let lastOperand = '';
let lastOperator = '';
/** calculator STATUS END */

const displayPrimary = document.querySelector('.primary');
const displaySecondary = document.querySelector('.secondary');

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', (e) => {
    displayPrimary.textContent = '';
    displaySecondary.textContent = '';
    periodUsed = false;
    selectedOperator = '';
    accumulator = '';
    lastOperand = '';
    lastOperator = '';
});

const deleteButton = document.querySelector('.delete');
deleteButton.addEventListener('click', () => {
    displayPrimary.textContent = displayPrimary.textContent.slice(0, -1);
    if (!displayPrimary.textContent) displayPrimary.textContent = '';
});

const digits = document.querySelectorAll('.digit');
digits.forEach((digit) => {
    digit.addEventListener('click', (e) => {

        if (e.target.textContent === '.') {
            if (periodUsed) return;
            periodUsed = true;
        }

        displayPrimary.textContent += e.target.textContent;
        console.log('digit pressed!');
    });
});

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {

        if (e.target.textContent === '-' && displayPrimary.textContent === '') {
            displayPrimary.textContent = '-';
            return;
        }

        if (periodUsed) periodUsed = false;

        if (!accumulator) accumulator = displayPrimary.textContent;
        else lastOperand = displayPrimary.textContent;

        if (!lastOperator) lastOperator = supportedOperators[e.target.textContent];
        selectedOperator = supportedOperators[e.target.textContent];

        if (accumulator && lastOperand) {
            let result = (operate(lastOperator, parseFloat(accumulator), parseFloat(lastOperand))).toString();
            if (!result) return;
            accumulator = result;
            lastOperator = selectedOperator;
        }
        displayPrimary.textContent = '';
        displaySecondary.textContent = accumulator;
    });
});

const equal = document.querySelector('.equal');
equal.addEventListener('click', (e) => {
    lastOperand = displayPrimary.textContent;
    if (accumulator && lastOperand) {
        let result = (operate(selectedOperator, parseFloat(accumulator), parseFloat(lastOperand))).toString();
        if (!result) return;
        accumulator = result;

        lastOperator = '';

        displayPrimary.textContent = '';
        displaySecondary.textContent = accumulator;
    }
});
