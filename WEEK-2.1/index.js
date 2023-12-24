const fs = require("fs");

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})

//Wrapping around the async function is the way to create
//async function

//callback hell
//we are writing a program where we try to log something after 1 sec
//and after that is logged we are logging other thing
//after 2 seconds.


/*setTimeout(function(){
    console.log("after 1 sec");
    setTimeout(function(){
        console.log("after 2 sec after before line");
    },2000);
},1000);*/


//Wouldn't be it make more sense to write a code 
//that is very much clear and not too much indentated
//like the one we wrote above introducing the callback hell.

//promises let you do this

//Calling a function after 1 sec using promises

//Start
function myOwnSetTimeout(duration){
    let p = new Promise(function(resolve){
        setTimeout(resolve,duration);
    });
    return p;
}
//the function above returns a promise.

myOwnSetTimeout(1000).then(function(){
    console.log("log the first thing!");
})
//End

//diff between normal way of making async function
//the promisified function won't take any callback
//promise is a function. 

//Promise has three states -> pending,fulfilled and rejected
//if we don't use then() with the instance of promise than it is
//called to be in pending state.


