const display = document.getElementById("Display");



let numMemory = 0;
let operatorMemory;


function addDisplayValue(value) {
    display.value += value;
}

function storeMemory(operator) {
    if (operatorMemory != null) {
        calculate();
    }
    numMemory = Number(display.value);
    operatorMemory = operator;
    display.value = "";
}

function calculate(){
    let displayNum = Number(display.value);
    display.value = "";
    switch (operatorMemory) {
        case "+":
            display.value = displayNum + numMemory;
            break;
        case "-":
            display.value = numMemory - displayNum;
            break;
        case "*":
            display.value = displayNum * numMemory;
            break;
        case "/":
            display.value = numMemory / displayNum;
            break;
            
    }
    operatorMemory = null;
    numMemory = 0;
}

function clearDisplay(){
    display.value = "";
    operatorMemory = null;
    numMemory = 0;
}