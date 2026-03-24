// promise --> represents the result of an asynchronous operations 

//Resovled --> success or fulfilled
//Rejected  --> failure
//Pending  --> still waiting 

//syntax:
let promise = new Promise(function(resolve, reject){

})


//ex:
let myPromise = new Promise(function(resolve, reject){
    let success = false;

    if(success){
        resolve("task completed")
    }else{
        reject("task failed")
    }
})

myPromise 
 .then(function(result){
    console.log(result)
 })

 .catch(function(error){
    console.log(error)
 })
