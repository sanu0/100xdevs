const fs = require("fs");
//fileSystem module of node js
//This function lets you read a file in the given encoding.
fs.readFile("a.txt","utf-8",function(err,data){//first get the error argument and then the data
    console.log(data);
})
console.log("hi there")
// So we saw that fs.readFile is an async function.
let a = 0;
for(let i=0;i<1000000000;i++){
    a++;
}
console.log("hi there 2!");

//OUTPUT : 
// hi there
// hi there 2!
// hi there from a.txt! 
//In js even if the web api gives us back the task that we 
//gave to it and the thread of the js is busy then still the task has been done
//but it will wait in the callback queue untill the thread gets free and event loop
// takes it back to our call stack or execution stack!


//Callback only makes sense in async funtions and not in sync functions


//How can we create an async function of our own

//my own async function
function mineasync(cb){
    fs.readFile("a.txt","utf-8",function(err,data){
        cb(data);
    });
}

//callback function to call
function onDone(data){
    console.log(data);
}

mineasync(onDone);

//It is just a wrapper of another async function
//usually all async func you will write will be on top of 
//js provided async func like setTimeout or fs.readFile()

//this is the ugly way
//we can do it in a good way using promises