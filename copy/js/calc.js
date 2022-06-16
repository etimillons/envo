let firstNumber = parseInt(prompt("Input Value"));
let secondNumber =parseInt(prompt("Input Value"));
document.getElementById("firstvalue").textContent = firstNumber;
document.getElementById("sirstvalue").textContent = secondNumber;

let resultEL = Document.getElementById("result");

function add() {
    let result = a + b;
    resultEL.textContent = "sum:" + result;
}

function divide() {
    let result = a/b;
    resultEL.textContent = "Quotient " + result;
}
function multiply
{
    let result = a * b
    resultEL.textContent = "Multiplication" + result;
}
function subtract() {
    let result = a - b
    resultEL.textContent = "subtract" + result;
}


