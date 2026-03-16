//Arrays- stores multiple values in one variable
let fruits = ["apple", "banana", "mango"];
console.log(fruits);
console.log(fruits[0])

//push() --> adds new item to the end of themarray
let fru = ["mango", "orange", "banana"]
fru.push("apple")
console.log(fru)

//pop()  --> removes the last item
let arr = [1,2,3,4]
arr.pop()
console.log(arr)

//shift() --> removes the first item
let items = ["pen", "book","bag"]
items.shift()
console.log(items)

//unshift() --> adds new item at the beginning
let fruit = ["apple","mango"]
fruits.unshift("pineApple");
console.log(fruit)


//includes() --> checks if item exists in the array
let num = [10,20,30]
console.log(num.includes(60))

//slice() --> used to take a part of array

let city = ["hyd","kur","vig"]
let ans = city.slice(1,2)
console.log(ans)

//splice(start, deleteCount, newItem) -->used to add elements, remove elements,replace elements

let numbers = [10,20,30,40]
//removing elements
numbers.splice(1,2)
console.log(numbers)

//adding elements
numbers.splice(2,0,100)
console.log(numbers)

//replace element
numbers.splice(1,1,500)
console.log(numbers)
