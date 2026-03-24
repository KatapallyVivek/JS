//callback --> it is function that is passed as to another function argument

//ex:
function greet(name, callback){
    console.log("hello" + name);
    callback(); 
}

function Byee(){
    console.log("good bye!")
}
greet("Mounika", Byee); // Byee is a callback function



//Callback hell --> when callbacks are nested inside other callbacks many times

//ex:
setTimeout(() =>{
    console.log("step 1")
    setTimeout(() => {
        console.log("step 2")
        setTimeout(() => {
            console.log("step 3")
        },2000)
    },2000)
}, 2000)

