function sayHi() {
    alert("What else?");
}

function() {
    alert("What else?");
} // anonymous function

// Function Expressions
let sum = function(a, b) {
    let result = a + b;
    return result
}

let sayHi = function() {
    alert("Hello World");
}

// Arrow functions
let sum = (a, b) => {
    return a + b;
}

let sum = (a, b) => a + b;

let getVal = () => alert("Hello");

let num = n => n * 3; 

// Function is a value

// function showAlert() {
//     alert("Hello");
// }
showAlert();

let showAlert = function() {
    alert("hello");
}
showAlert()
// alert(showAlert);

let newVal = showAlert;

newVal();
showAlert();


// Function Invocation
<button onclick="showAlert()">save</button>
showAlert();


function toCelsius(farenheit, kelvin) {
    return (5/9) * ((farenheit + kelvin) -32);
}

toCelsius(10, 60);



function showMessage() {
    alert("Hello everyone");
}

showMessage();
showMessage();


// Function Return
function logVal(a, b) {
    return a + b;
}

logVal(23, 20);
logVal(1, 67);

let y = logVal(12, 34);


// Function used as a variable
let message = "The value of the function is " + y;

let message = "The value of the function is " + logVal(12, 34);



// Local variable

function car() {
    let carType = "toyota";
}


function showMessage() {
     let text = "Hello, I'm in love with JavaScript";
    alert(text);
}
showMessage();

console.log(text);


let ffirstName = "Caleb";
function showMessage() {
    let text = "Hello " + ffirstName;
    alert(text);
}

showMessage();


let ffirstName = "Caleb";
function showMessage() {
    ffirstName = "Peter";
    let text = "Hello " + ffirstName;
    alert(text);
}

alert(ffirstName); // Caleb

showMessage(); // Hello Peter

alert(ffirstName);// Peter


// Parameters and default parameter value
function showMessage(sender, message=getVal()) {
    alert(sender + ": " + message);
}

showMessage("Ariowo", "Hello! class");
showMessage("Fortune", 'I like "quotes');

showMessage("Ossai");


function showMessage(sender) {
    if(sender === undefined) {
        sender = "No message";
    }

    alert(sender);
}
showMessage();
showMessage(Favour);


/// passing functions as values
function request(ask, yes, no) { 
    if(confirm(ask)) {
        yes();
    } else no();
}

function confirmMessage() {
    alert("You agreed!")
}

function cancelMessage() {
    alert("You Cancelled!")
}

request("Do you agreed?", confirmMessage, cancelMessage);




let a = 2;
let b = 5;
let c = a * b; // 2 * 5 = 10

let f = 10;
let w = 4;
let h = f / w; // 10 / 4 = 2.5

let z = 89;
let p = 76;
let k = z - p; // 89 - 76 = 13

let q = "2";
let t = "8";
let u = q + t; // 28

let d;
d = 4 ** 2; // 16

d = 4 ** (1/2);
d = 27 ** (1/3);


s += 4;
s = s + 4;

l *= 4;
l = l * 4;


// increment ++
let numb = 3;
numb++;
alert(numb); //

let numb = 3;
++numb;
alert(numb);


let count = 1;
let b = ++count;
console.log(b); // 2
//alert(++count); // 3
//alert(4 * ++count); // 16


let count = 1;
let b = count++;
console.log(b); // 1
//alert(count++); // 2
//alert(4 * count++); // 12


let counter = 1;
counter++; // 2
console.log(counter); //

let counter = 1;
++counter;
++counter;
console.log(counter);

++numb;
numb++;



// == equality

5 == "5" //true
5 == 5
6 == 4 + "2"; // false
"01" == 1 // true
1 == true // true
false == "" //true
undefined == null //true


// === strict equality (equal value and equal data type)
5 === "5" // false
4 === "four" //
6 === 4 + "2"; //
false === 0 //

undefined === null // false

// != not equal

Tenary operator 
f = (condition) ? value1 : value2;
let gender = (gender == male) ? "male" : "female";
let age = (age > 18) ? "Permitted" : "Underage";

if (gender == male) {
    return "male";
} else {
    return "female";
}

// !== not equal or not equal type


//    Logical Operator
&& --- logical AND
|| ---- logical OR 
! ----- logical NOT 
?? -----  Nullish Coalescing

// OR finds the first truthy value

alert(false || true) //  true
alert(true || true) //  true
alert(false || false) //  false
alert(true || false) //  true

if (1 || 0) {
    alert("hELLO!")
}

let minutes = 30;
let isMonday = true;

if (minutes < 10 || minutes > 40) {
    alert(" No time!");
}


if (minutes < 10 || minutes > 40 || isMonday) {
    alert(" No time!");
}


// AND - finds the first falsy value or the last value if none were found

alert(false && true) //  false
alert(true && true) //  true
alert(false && false) //  false
alert(true && false) //  false


let days = 7;
let hours = 4;
if (days == 7 && hours == 4) {
    alert("Heloo!");
}
if ( 1 && 0 ) {
    console.log("Game");
}

alert(1 && 5); // 5
alert(null && 5) // null
alert( 2 && 45 && null && 12 && 0); // null 


//NOT ! -  it returns the inverse value
let a = true;

alert(!0); //!false // true
alert(!a); //
alert(!true); // false


// ?? - Nullish Coalescing
// returns the first defined value of the two.

Ex
m ?? n is //
if m is defined, then return m 
if m is not defined... it returns n.


let a;

alert( a ?? "Hello"); // "Hello" 


let width = 0;
alert(width || 100); // 100
alert(width ?? 100); // 0


// FOR LOOP
// loop between 1 to 10.
 
// Loop begins
// if condition -> run body and run step/increment/decrement

for(count = 1; count < 11; count++) {
    console.log(count);
}

// loop from 10 to 1
for(count = 10; count > 0; count--) {
    console.log(count);
}

let comments = [
    "hey!",
    "looping is sweet",
    "Let's do this",
    "For Loop reduces headache"
]

for(let i = 0; i < comments.length; i++) {
    console.log(comments[i]);
}

// DRY - Don't Repeat Yourself
console.log(comments[0]);
console.log(comments[1]);
console.log(comments[2]);
console.log(comments[3]);


// while loop
while(condition) {
    // loop body
}

Ex
let count = 0;
while(count < 5) {
    alert(count);
    count++;
}

let count = 0;
while(count < comments.length) {
    alert(comments[count]);
    count++;
} 

let b = 4;
while(b) {
    alert(b);
    b--;
}


// d0...while loop
do {
    // loop body
} while(condition);

// the loop will first execute the body, then check the condition, and while it's truthy execute it again and agian

let a = 0;
do {
    alert(a);
    a++;
} while(a < 4);



// if/else/else if

Ex 
if (true) {
    alert("This will run");
}

let num = 22;

if(num <= 20) {
    alert("You can't enter the club");
} else {
    alert("Welcome to the club")
}

let age = 75;

if (age < 75) {
    console.log("You're are not permitted");
} else if (age === "75") {
    alert("Your birthday card is read");
} else {
    console.log("Not eligible");
}












