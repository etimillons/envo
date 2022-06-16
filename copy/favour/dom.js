let inputEL = document.getElementsByName("gender");
let female = inputEL[1]
female.remove();
let fan = document.getElementsByClassName("feel");
let fans = fan[0];
console.log(fans);
fans.remove();
console.log(female);
let main = document.createElement("main")
console.log("main");
main.innerHTML = "<p>If you no sabi DOM u b shit no come class on monday";
console.log(main);
document.body.prepend(main);