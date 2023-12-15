//Normal promiseified syntax

//my own asynchronous function
// function sanuReadFile(){
//     let p = new Promise(function(resolve){
//         //do some async logic here
//         resolve("hi there!")
//     });
//     return p;
// }

// function main1(){
//     sanuReadFile().then(function(value){
//         console.log(value);
//     });
// }

// main1();

//Aysnc/await syntax

function sanuAsuncReadFile(){
    let p = new Promise(function(resolve){
        //do some async logic here
        setTimeout(function(){
            resolve("hi there await!")
        },1000)
    });
    return p;
}

async function main(){
    const value1 =  sanuAsuncReadFile();
    console.log(value1);
    // promise <pending> will be output here
    const value =  await sanuAsuncReadFile();
    console.log(value);
    // promise <'hi there await'> will be output here
    // no callbacks and no .then() syntax
}
main();