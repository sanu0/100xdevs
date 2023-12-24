//Here we will learn about middlewares Use of middlewares are for prechecks and 
//in real world the pre-checks are of two types
//1. Authentication
//2. Input validation
//These two pre-checks are done before your actual logic kicks in

 /**1. User needs to send a kidney as a query param which should be a number from 1-2
  * 2. User should send a username and password in headers
  */




const express = require("express");
const app = express();

app.use(express.json());


//Removable cmnts to check ugly solution of authentication
/*
app.get('/health-checkup',function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(username != 'sanu0' || password != 'pass'){
        res.status(400).json({"msg" : "Somethings up with your inputs!"})
        return;
    }
    if(kidneyId !=1 && kidneyId != 2){
        //do something here
        res.status(400).json({"msg" : "Somethings up with your inputs!"})
        return;
    }
    res.status(200).json({
        "msg" : "You are fine!"
    })
})
*/

//Ugly solution of authentication - Create a new route, repeatition of code





/**Even if you make function for authentication still there will be some repeatition.
 * So the better way for it is to use middleware!
*/

//Better way for authentication using middleware

let start = 0;
let end= 0;
function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    if(username != 'sanu0' || password != 'pass'){
        res.status(403).json({"msg" : "Incorrect inputs!"});
        //end = Date.now()
        //console.log(end - start)
    }
    else{
        next();
        
    }
}
function kidneyMiddleware(req,res,next){
    const kidneyId = req.query.kidneyId;
    if(kidneyId !=1 && kidneyId != 2){
        res.status(400).json({"msg" : "Incorrect Inputs"})
        //end = Date.now()
        //console.log(end - start)
    }
    else{
        next();
        
    }
}
/* ----------------------------------------------------------
function startMiddleware(req,res,next){
    start = Date.now();
    next();
}
--------------------------------------------------------------*/

//We can use this in this way or use app.use method for middleware
// app.get('/health-checkup',userMiddleware,kidneyMiddleware,function(req,res){
//     // do something with kidney here
//     res.send("your heart is healthy");
// })


//Important - > Now if we see that some middleware is called in each route handlers
//then we can just use app.use(middleware_function) and after this
//every route handler which comes below it will always call middleware untill
//it reaches the last call.

//app.use(userMiddleware);
//app.use(kidneyMiddleware);
// app.use(startMiddleware);

app.get('/health-checkup',/*startMiddleware,*/userMiddleware,kidneyMiddleware,function(req,res){
    // do something with kidney here
    res.send("your heart is healthy");
    //end = Date.now()
    //console.log(end - start)
})



app.get('/kidney-checkup',function(req,res){
    // do something with kidney here
    res.send("your heart is healthy");
})

app.get('/heart-checkup',function(req,res){
    // do something with kidney here
    res.send("your heart is healthy");
})



//this is cleaner
app.listen(3000);