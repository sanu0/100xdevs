/**When an exception is raised the process exits since the JS
 * program doesn't want to proceed anymore
 */

//if you know a certain codebase is unsafe or may throw an error
//We wrap it in try catch.
//if you write a great code you dont even need try catch
//But some certain codebase does throw an error
//For example jwt.verify() will either run safly or throw an error, so 
//we have to wrap it around try catch syntax

try{
    let a;
    console.log(a.length);
    console.log("hi from try")
}catch(e){
    console.log("error is caught!")
}