// // Arthemetic operators +, -, *, /, % , ++, --

// // + operator --> it gives the sum 

let num1 = 50;
let num2 = 90;
let sum1 = num1 + num2;
let sum2 = 40 + 50;
comsole.log(sum1)
console.log(sum2);

// // - operator --> it gives the difference 
let num3 = 50;
let num4 = 90;
let diff1 = num3 - num4;
let diff2 = 90 - 50;
console.log(diff1)
console.log(diff2);

// // * operator --> it gives the product
let num5 = 5;
let num6 = 3;
let product = num5*num6;
console.log(product);

// // / operator --> it gives the quotient 
let num7 = 15;
let num8 = 2;
let quo = num7/num8;
console.log(quo);

// // % operator --> it gives the remainder (modulus)
let num9 = 15;
let num10 =23;
let rem = num9%num10;
console.log(rem);

// Assignment operators = , +=, -=, *=, /=, %=

let num11 = 29;

num11 += 5;  // num11 = num11 + 5;

console.log(num11);

// Comparison operator ==, ===, !=, !==

// logical operators &&, ||, !

let b = 20;
let c = 30;

if(b < c && b == c && b > c) {  // && --->> all the conditions should be true then outpit will be exceuted
    console.log("hii");         // && --->> if atleast one condition is false, there will be no output
}

if(b >= c || b == c || b > c || b === c) { // || -->> atleast one condition should be true, then output will be exceuted
    console.log("hello");
}

// ternary operator,  syntax: condition ? true output : false output;

let age = 10;

let ans = age > 18? "major" : "minor";
console.log(ans);