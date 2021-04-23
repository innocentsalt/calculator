
const add = (a, b) => a+b;
const subtract = (a, b) => a-b;
const multiply = (a, b) => a*b;
const divide = (a, b) => a/b;

const operate = (operator, a, b) => operator(a, b);

/** calculator STATUS BEGIN */
const supportedOperators = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide,
};
/** calculator STATUS END */

const displayPrimary = document.querySelector('.primary');
const displaySecondary = document.querySelector('.secondary');

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', (e) => {
    displayPrimary.textContent = '';
    displaySecondary.textContent = '';
});

const deleteButton = document.querySelector('.delete');
deleteButton.addEventListener('click', () => {
    displayPrimary.textContent = displayPrimary.textContent.slice(0, -1);
    if (!displayPrimary.textContent) displayPrimary.textContent = '';
});

const digits = document.querySelectorAll('.digit');
digits.forEach((digit) => {
    digit.addEventListener('click', (e) => {

        if (e.target.textContent === '.' && periodUsed) return;
        else periodUsed = true;

        displayPrimary.textContent += e.target.textContent;
        console.log('digit pressed!');
    });
});

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {  
    });
});

const equal = document.querySelector('.equal');
equal.addEventListener('click', (e) => {
});
