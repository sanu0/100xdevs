//Write a program that prints all the male people's first name given
// a complex object

//Object syntax

// let person = {
//     firstName : "sanu",
//     gender : 'male',
//     age : 22
// }

// let allUsers  = [{
//     firstName : "sanu",
//     gender : 'male',
//     //metadata is itself is an object inside an object
//     metadata:{
//         age : 21,
//         address : ""
//     }
// },
// {
//     firstName : "priya",
//     gender : 'female'
// },
// {
//     firstName : "abhishek",
//     gender : 'trans-gender'
// }]
// for(let i = 0;i<allUsers.length;i++){
//     if(allUsers[i].gender == 'male'){
//         console.log(allUsers[i]["firstName"]);
//     }
// }

//Callbacks
//Taking function as argument.

function sum(a,b,fnToCall){
    let result = a + b;
    fnToCall(result);
}
function displayResult(data){
    console.log("Result of the sum is : " + data)
}
function displayResultPassive(data){
    console.log("Sum's result is : " + data)
}

//in a single function call do it

const ans = sum(1,2,displayResult);


