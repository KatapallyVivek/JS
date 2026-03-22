//strings-simple text and written inside quotes
let name = "Mounika"
console.log(name);
console.log(name[0]);
console.log(name[10]);

//string Methods  

//1.length of the string -->returns how many characters are in the string
console.log(name.length);

//ex2: 
let a = "laptop";
console.log(a.length)

//toLowerCase() --> converts all letters to small letters
let item = "PEN"
console.log(item.toLowerCase())

//toUpperCase()  -->  converts all letters to Capital letters
let b = "javascript"
console.log(b.toUpperCase())

//includes() --> checks if a word exists inside a string
let sent = "I Love Js";
console.log(sent.includes("js"))

//slice() -->returns part of the string
let txt = "javascript";
console.log(txt.slice(2,6))
console.log(txt.slice(4,9));

//replace() --> replaces a word with another word
let text = "Hello world"
console.log(text.replace("world","frnds"))

let c = "js is a simple lang";
console.log(c.replace("js","c"))

let str = "hellololo"
console.log(str.replace("h","b"))
console.log(str.replaceAll("lo","p"))

//trim() --> removes extra spaces from start and end
let txt1  = "      hello     to       world      "
console.log(txt.trim())


