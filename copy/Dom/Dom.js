// let newColor = prompt("What is your favourite color?")
// let customerName = prompt("What is your name?")
document.body.style.backgroundColor= "red";
document.getElementById("dom").style.color="white";
document.getElementById("dom").style.fontSize="48px";
document.getElementById("dom").textContent+= customerName;
let P = 2500;
let R = 10;
let T = 2;
let SI = (P*R*T)/100;
console.log(SI);
document.getElementById("si").textContent+= SI;
document.getElementById("si").style.color= "white";

