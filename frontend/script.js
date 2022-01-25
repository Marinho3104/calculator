const numbers = document.querySelectorAll('[data-number]');
const operations = document.querySelectorAll('[data-operation]');

const clearAll = document.querySelector('[data-clearAll]');

const clear = document.querySelector('[data-clear]');

const equal = document.querySelector('[data-equal]');

var currentCalculations = document.querySelector('[data-currentCalculations]');
var previousCalculations = document.querySelector('[data-previousCalculations]');

class Calculator {

    constructor(previousCalculations, currentCalculations) {
        this.previousCalculations = previousCalculations;
        this.currentCalculations = currentCalculations;
    }

    clearAll() {
        this.currentCalculations.innerText = '';
        this.previousCalculations.innerText = '';
    }

    clear() {
        this.currentCalculations.innerText = this.currentCalculations.innerText.substring(0, this.currentCalculations.innerText.length - 1)
    }

    appendNumber(number) {
        if (number == '.' && this.currentCalculations.innerText.includes('.'))
            return;
        this.currentCalculations.innerText += number;
    }

    appendOperation(operation) {
        this.previousCalculations.innerText = this.currentCalculations.innerText + ' ' + operation;

        this.currentCalculations.innerText = ''
    }

    equal() {
        var prevText = this.previousCalculations.innerText;
        var currentText = this.currentCalculations.innerText
        var prevNumber = prevText.substring(0, prevText.length - 2);
        var _operation = prevText.charAt(prevText.length - 1);

        var multipliarNumber = ((prevNumber.length - prevNumber.indexOf('.') > currentText.length - currentText.indexOf('.')) ? prevNumber.length - prevNumber.indexOf('.') : currentText.length - currentText.indexOf('.'))
        multipliarNumber--;

        switch (_operation) {
            case '+':
                this.previousCalculations.innerText = prevText + ' ' + currentText;
                this.currentCalculations.innerText = Math.round((parseFloat(prevNumber) + parseFloat(currentText)) * (1 * 10**multipliarNumber)) /  (1 * 10**multipliarNumber);
                break;
            case '-':
                this.previousCalculations.innerText = prevText + ' ' + currentText;
                this.currentCalculations.innerText = Math.round((parseFloat(prevNumber) - parseFloat(currentText)) * (1 * 10**multipliarNumber)) / (1 * 10**multipliarNumber);
                break;
            case '*':
                this.previousCalculations.innerText = prevText + ' ' + currentText;
                this.currentCalculations.innerText = Math.round((parseFloat(prevNumber) * parseFloat(currentText)) * (1 * 10**multipliarNumber)) /  (1 * 10**multipliarNumber);
                break;
            case '÷':
                this.previousCalculations.innerText = prevText + ' ' + currentText;
                this.currentCalculations.innerText = Math.round((parseFloat(prevNumber) / parseFloat(currentText)) * (1 * 10**multipliarNumber)) /  (1 * 10**multipliarNumber);
                break;
        }
    }


}


const calculator = new Calculator(previousCalculations, currentCalculations);

equal.addEventListener('click', () => {
    calculator.equal();
})

operations.forEach(operationButton => {
    operationButton.addEventListener('click', () => {
        calculator.appendOperation(operationButton.innerText)

    });
})

numbers.forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        calculator.appendNumber(numberButton.innerText)

    });
})

clearAll.addEventListener('click', () => {
    calculator.clearAll()
});

clear.addEventListener('click', () => {
    calculator.clear()
});