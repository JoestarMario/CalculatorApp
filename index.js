const display = document.getElementById("Display");



let numMemory = 0;
let operatorMemory;


function addDisplayValue(value) {
    display.value += value;
}

function storeMemory(operator) {
    numMemory = display.value;
    if (operatorMemory) {
        calculate();
    }
    else{
        display.value = "";
    }
    operatorMemory = operator;
}

function calculate(){
    
}