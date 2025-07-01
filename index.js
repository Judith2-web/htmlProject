console.log(`Hello`);
console.log(`I like pizza!`);

window.alert(`This is an alert`);
window.alert(`I like Pizza!`);

document.getElementById("myH1").textContent = `Hello`;
document.getElementById("myP").textContent = `My first JavaScript`;

//variable = A container that stores a value.
//           Behaves as if it were the value it contains.

// 1. declaration  let x;
// 2. assignment   x = 100;

let x;
x = 123;

console.log(x);


let price = 10.99;
let gpa = 2.1;



console.log(`The price is $${price}`);
console.log(`Your gpa is: ${gpa}`);


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

let result = 1 + 2 * 3 + 4 ** 2;

console.log(result);

let total = 12 % 5 + 8 / 2;

console.log(total);

let it = 6 / 2 ** (2 + 5);

console.log(it);







//this is a comment