// About basic javascript

console.log("Hello world")
console.log("This is my first program");
console.log("iam learning javascript");
console.log("JavaScript is used for both frontend and backend");

// about variables
// varible - it is a container used to store the value

// var - old version --> we can modify and re-declare
// let - new version --> can be modified but cannot be re-declared
// const - new version --> cannot be re-declared and cannot be modified

var x = 100;
var x = 200;
console.log(x); // output will be 200

let a = 10;
let a = 20;
console.log(a); // gives error(can't be re-declared)

let a1 = 10;
a1 = 20;
console.log(a1) // output will be 20

const b = 12;
const b = 3;
console.log(b) // gives error (can't be re-declared)

const b1 = 29;
b1 = 9;
console.log(b1) // gives error (can't be modified)


let fullName = "Vivek Katapally";
console.log(fullName)


// operators +, -, *, /, % 

// + operator --> it gives the sum 

let num1 = 50;
let num2 = 90;
let sum1 = num1 + num2;
let sum2 = 40 + 50;
comsole.log(sum1)
console.log(sum2);

// - operator --> it gives the difference 
let num3 = 50;
let num4 = 90;
let diff1 = num3 - num4;
let diff2 = 90 - 50;
console.log(diff1)
console.log(diff2);

// * operator --> it gives the product
let num5 = 5;
let num6 = 3;
let product = num5*num6;
console.log(product);

// / operator --> it gives the quotient 
let num7 = 15;
let num8 = 2;
let quo = num7/num8;
console.log(quo);

// % operator --> it gives the remainder (modulus)
let num9 = 15;
let num10 =23;
let rem = num9%num10;
console.log(rem);


