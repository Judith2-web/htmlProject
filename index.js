console.log(`Hello`);
console.log(`I like pizza!`);

window.alert(`This is an alert`);
window.alert(`I like Pizza!`);

const usernameInput = document.getElementById("username");

  usernameInput.addEventListener("keyup", function () {
    console.log("Username:", this.value);
  });

 const firstnameInput = document.getElementById("firstname");

  firstnameInput.addEventListener("keyup", function () {
    console.log("firstName:", this.value);
  });

// document.getElementById("myH1").textContent = `Hello`;
// document.getElementById("myP").textContent = `My first JavaScript`;

//variable = A container that stores a value.
//           Behaves as if it were the value it contains.

// 1. declaration  let x;
// 2. assignment   x = 100;

/* let x;
x = 123;

console.log(x);


let price = 10.99;
let gpa = 2.1;



console.log(`The price is $${price}`);
console.log(`Your gpa is: ${gpa}`);

*/

/*
let firstName = "Jay";
let favouriteFood = "Yam & Eggs";
let email = "Jay123@gmail.com";


console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`You like ${favouriteFood}`);
console.log(`Your email is ${email}`);

let online = false;
let forSale = true;


console.log(`Bro is online: ${online}`);
console.log(`Is this car for sale: ${forSale}`);


let fullName = "Judith Ighodaro";
let age = 25;
let isStudent= false;

document.getElementById("p1").textContent = `My name is ${fullName}`;
document.getElementById("p2").textContent = `I am ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent} `;

// arithmetic operators = operands (values, varables, etc.)
//                        operators (+ - * /)
//                        ex. 11 = x + 5;

let students =  30;

students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;
students = students ** 2;

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;

console.log(students);


//students++;
//students--;

/*

operator precedence
1. parenthesis ()
2. esponents **
3. multiplication & division & module * / %
4. additiona & substraction

*/ 

/* let result = 1 + 2 * 3 + 4 ** 2;

console.log(result);

let total = 12 % 5 + 8 / 2;

console.log(total);

let it = 6 / 2 ** (2 + 5);

console.log(it); */



// How to accept user input

// 1. Easy way = window prompt
// 2. PROFESSIONAL WAY = HTML textbook


// 1. EASY WAY

// let username;

// username = window.prompt("whats's your username?");

// console.log(username);

// 2. PROFESSIONAL WAY = HTML textbook


/* let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH2").textContent = `Hello ${username}`
}
function onCreateBtn() {
let a = 1+1;
let b = 2+2;
let c = a+b
readMe(c)
console.log(c)
return c
  }

console.log(onCreateBtn())

function readMe (age){
console.log('I am '+ age + 'years old.')
}
*/


document.getElementById("mySubmit2").onclick = function() {
    let username = document.getElementById("username").value;
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let password = document.getElementById("pass").value;
    let email = document.getElementById("email").value;
    let phonenumber = document.getElementById("phone").value;
    let gender = document.getElementById("gender").value;
    let birthdate = document.getElementById("bdate").value;
    let quantity = document.getElementById("quantity").value;
    let payment = document.getElementById("payment").value;
    let subscribe = document.getElementById("subscribe").checked;


    console.log(username);
    console.log(firstName);
    console.log(lastName);
    console.log(password);
    console.log(email);
    console.log(phonenumber);
    console.log(gender);
    console.log(birthdate);
    console.log(quantity);
    console.log(payment);
    console.log(subscribe);
}

// Type conversion = change the datatype of a value to another
//                   (strings, numbers, booleans)

let x = "Jay";
let y = "Jay";
let z = "Jay";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);



let a = "";
let b = "";
let c = "";

a = Number(a);
b = String(b);
c = Boolean(c);

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);














//this is a comment