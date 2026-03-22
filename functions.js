/* function:
It is a block of code that performs a task when it is called
instead of writing the same code many times we write it once in a function and reuse it*/

//syntax
function functionName(parameters){
 //code
}

//without parameter
function greet(){
    console.log("hello frnds");
}
greet();
greet();
greet();n
greet();

//function with Parameters

function greet(name){
    console.log("hello " + name);
}
greet("Mounika")
greet(100);


//function with return
function add(a,b){
    return a + b;
}
console.log(add(10,12)) // a = 3 and b = 1
  
//ex:2
function mul(x,y){
    return x * y;
}
let ans = mul(2,4)
console.log(ans)



//Arrow functions --> shortest way to write functions in js

const add = (a,b) =>{
  //code
}

//without parameter
const greet = () => {
    console.log("hello frnds")
}
greet();


//with parameters
const mul = (a,b) => {
    return a*b;
}
console.log(mul(1,5))

//short Arrow function
const sq = num => num * num;
console.log(sq(6))

// const sq = (num) => {
//     return num * num
// }
// console.log(sq(6))



