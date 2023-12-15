//Promises are syntactical sugar that makes this code slightly more readable or a more 
//Pretty way to write it.
function findSum(n){
    let ans = 0;
    for(let i =0;i<n;i++){
        ans+=i;
    }
    return ans;
}
function findSumTill100(){
    return findSum(100);
}
setTimeout(findSumTill100,1000)
console.log("hello world");

//Cleaner way to create our own async code just like the way we did it in ugly way in 
//asunc.js file

const fs = require("fs");

//my own asynchronous function
function sanuReadFile(){
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data); // This where async logic or code is called
        });
    })
}

//callback function to call
function onDone(data){
    console.log(data);
}

//sanuReadFile().then(onDone);
var a = sanuReadFile() //a will store the returned value which is a promise.
console.log(a);
a.then(onDone);





//so after promise instance gets returned then using it we will call 
// the resolve giving it a callback.


//So promise works in this way that

//Timmy -->> Simmy
//Timmy(js) says to simmy(web api) "can you read a file, promise me simmy!"

//Simmy -->> Timmy
//simmy says immediately that bhaiya
//"sure, here's a promise"
//I may or may not resolve this promise, returns it immediately.

//so all this returning of promise occurs sync but when we call then()
// or we wanna resolve the promise then it will happen async.

// Timmy do .then(cb) so that simmy know where to send that data.

//Finally simmy does her thing and resolve the file and since the promise.then() 
//function is called here on onDone function so resolve will make sure that the control reaches to onDone and then
//js engine will take care of it.