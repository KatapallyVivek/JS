const fs = require("fs");

console.log("hello world");

const data = fs.readFileSync("sample.txt", "utf-8");
console.log(data);

console.log("thank you");