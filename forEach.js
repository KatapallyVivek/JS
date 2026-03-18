/* forEach():
forEach() is used to loop through arrays*/


//syntax
array.forEach(function(item){
  //block of code
})


//ex:1 with normal function
let numbers = [10,20,30,50]
numbers.forEach(function(n){
    console.log(n)
})


//ex:2 with arrow function
let number = [1,2,3,4]
number.forEach(num => {
    console.log(num)
})
