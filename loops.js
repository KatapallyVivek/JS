// loops : it is used to execute a peice of code again and again

// 1. for loop
// 2. while loop
// 3. do while loop
// 4. for of loop
// 5. for in loop

for(let i = 1; i < 0; i++) {

    console.log("Hii" + i);
}

let j = 0;
while(j > 10) {

    console.log(j);
    j++;
}

let k = 0;

do {
    console.log("hii" + k);
    k++;
}while(k < 10);


const employee = {
    
    fullName : "john",
    age : 25,
    comapany : "Oracle",
    salary : 50000,
    dept : "SWE",
    place : "USA"
};

for( let key in employee) {
    console.log(employee[key]);
}

const marks = [10, 20 , 30 , 40 , 50];
for( let num of marks) {
    console.log(num);
}

for(let i = 0; i< 5; i++) {
    console.log(marks[i]);
}