let display = document.getElementById('display');
let memory = 0;

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function addToMemory() {
    memory += parseFloat(display.value) || 0;
    clearDisplay();
}

function subtractFromMemory() {
    memory -= parseFloat(display.value) || 0;
    clearDisplay();
}

function clearMemory() {
    memory = 0;
}

function recallMemory() {
    display.value += memory;
}
