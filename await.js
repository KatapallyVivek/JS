// Async/Await -->it is modern way to handle asynchronous code 

//syntax:
 
async function myFunction(){
    let result = await somePromise;
}

//example:
function getData(){
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve("Data received")
        },2000)
    })
}

async function fetchData(){
    let result = await getData();
    console.log(result)
}
fetchData()
