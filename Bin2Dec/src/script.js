//DOM
const binInput = document.getElementById("bin-input");
const decOutput = document.getElementById("dec-output");
const clearButton = document.getElementById("clear-btn");
const message = document.getElementById("message");

//Variables
let input = [];

//Functions
function clear() {
    document.getElementById("input-section").reset();
    decOutput.innerText = 0;
    message.style.display = "none";
    binInput.focus();
}

function bin2dec() {
    let decimalArray = [];

    for (i=0; i<inputDigits.length; i++) {
        decimalArray[i] = inputDigits[i] * Math.pow(2, (inputDigits.length - 1 - i));
    }
    
    let sum = decimalArray.reduce((a, i) => a + i);

    decOutput.innerHTML = sum;
}

function start() {
    binInput.focus();

    clearButton.addEventListener("click", clear);

    binInput.addEventListener("keyup", function(event) {
        input = binInput.value;
        inputDigits = input.split("");

        const key = event.key;
        if (input.includes("2") || input.includes("3") || input.includes("4") || input.includes("5") ||
        input.includes("6") || input.includes("7") || input.includes("8") || input.includes("9")) {
            decOutput.innerHTML = "";
            message.style.display = "block";
        } else if (binInput.value == false) {
            decOutput.innerHTML = 0;
            message.style.display = "none";
        } else {
            message.style.display = "none";
            bin2dec();
        }
    });

    binInput.addEventListener("keydown", function(event) {
        const key = event.key;    
        if (key === "Enter") {
            event.preventDefault();
        }
    });
}

start();