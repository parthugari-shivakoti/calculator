let memory = 0; // Memory variable for memory operations
let resultDisplay = document.getElementById('result');

// Function to append digits and operators to the result display
function appendToResult(value) {
    resultDisplay.value += value;
}

// Function to clear all the input
function clearAll() {
    resultDisplay.value = '';
}

// Function to clear the last entered value
function clearLast() {
    resultDisplay.value = resultDisplay.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
    try {
        resultDisplay.value = eval(resultDisplay.value);
    } catch (error) {
        resultDisplay.value = 'Error';
    }
}

// Function to calculate the square root
function calculateSquareRoot() {
    try {
        resultDisplay.value = Math.sqrt(eval(resultDisplay.value));
    } catch (error) {
        resultDisplay.value = 'Error';
    }
}

// Function to calculate the natural logarithm (ln)
function calculateLog() {
    try {
        resultDisplay.value = Math.log(eval(resultDisplay.value));
    } catch (error) {
        resultDisplay.value = 'Error';
    }
}

// Memory add function
function memoryAdd() {
    try {
        memory += parseFloat(resultDisplay.value);
        resultDisplay.value = '';
    } catch (error) {
        resultDisplay.value = 'Error';
    }
}

// Memory recall function
function memoryRecall() {
    resultDisplay.value = memory;
}

// Memory clear function
function memoryClear() {
    memory = 0;
    resultDisplay.value = '';
}

// Function to calculate the square of the current value
function calculateSquare() {
    try {
        let currentValue = eval(resultDisplay.value);
        resultDisplay.value = Math.pow(currentValue, 2);
    } catch (error) {
        resultDisplay.value = 'Error';
    }
}

// Function to calculate the reciprocal of the current value (1/x)
function calculateReciprocal() {
    try {
        let currentValue = eval(resultDisplay.value);
        if (currentValue === 0) {
            resultDisplay.value = 'Error';
        } else {
            resultDisplay.value = 1 / currentValue;
        }
    } catch (error) {
        resultDisplay.value = 'Error';
    }
}

// Function to calculate factorial (x!)
function calculateFactorial() {
    try {
        let currentValue = parseInt(eval(resultDisplay.value));
        if (currentValue < 0) {
            resultDisplay.value = 'Error';
        } else {
            resultDisplay.value = factorial(currentValue);
        }
    } catch (error) {
        resultDisplay.value = 'Error';
    }
}

// Helper function to calculate factorial recursively
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Keyboard event handling
document.addEventListener('keydown', function (event) {
    if (event.key >= '0' && event.key <= '9') {
        appendToResult(event.key);
    } else if (event.key === '+') {
        appendToResult('+');
    } else if (event.key === '-') {
        appendToResult('-');
    } else if (event.key === '*') {
        appendToResult('*');
    } else if (event.key === '/') {
        appendToResult('/');
    } else if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Backspace') {
        clearLast();
    } else if (event.key === 'Escape') {
        clearAll();
    } else if (event.key === '.') {
        appendToResult('.');
    } else if (event.key === ' ') {
        appendToResult(' ');
    }
});
