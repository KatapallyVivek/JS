// CRUD 
// Create, Read, Update, Delete

const fs = require('fs');

// creating a new file  --> writeFileSync
function createFile() {
    fs.writeFileSync('data1.txt' , 'This is a file created using CRUD operation');
    console.log('A new file has been created');
}

createFile();

// reading a file --> readFileSync
function readFile() {
    let data = fs.readFileSync('data.txt', 'utf-8');
    console.log(data);
}
// readFile();

//updating a file --> appendFileSync
function updateFile() {
    fs.appendFileSync('data.txt', 'This file has been updated using CRUD');
    console.log("the file has updated");
}

// updateFile();

//deleting a file --> unLinkSync
function deleteFile() {
    fs.unlinkSync('data1.txt');
    console.log("The file has been deleted");
}

// deleteFile();