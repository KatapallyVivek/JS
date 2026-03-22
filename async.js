const fs = require("fs")

console.log("hello world");

function display(err, data) {

    if(err) {
        console.log("There is an error, please check the code correctly");
    }
    else{
        console.log(data);
    }
}

fs.readFile("sample.txt" , "utf-8" , display);
fs.readFile("sample1.txt" , "utf-8" , display);

console.log("thank you");

// setTimeout

console.log("a");

function takesTime() {
    console.log("b");
}

setTimeout(takesTime, 5000);
console.log("c");
