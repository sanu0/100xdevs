/**@Author -- sanu0 */

const express = require("express");

const app = express();
app.use(express.json());

app.post("/health-checkup",function(req,res){
    //kidneys = [1,2]
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("you have "+kidneyLength +" kidneys");
});

/**So Input validation is very important think of the fact that we are accepting josn file and in json file 
 * we are expecting an array.
 * And how to validate that the input we are getting is the same as we are expecting.We may have to write another 
 * bunch of repeatitive codes for that as well.
 */

//global catches
app.use(function(err,req,res,next){
    res.json({
        msg : "Sorry Something is up with our server!",
    })
})
/**So a global catch is also a middleware which is used to catch the error
 * If any in our code. So think that your input validation is failed and so there will be an error for sure
 * So not to send erroneous output to the user we must be sending the 
 * clean code. So for it we use a middleware called global catch. Which reside at the end of the code so to catch all errors
 * We catch the error here as it takes 4 inputs and we send something clean here.
 */

app.listen(3000);

//For input validation we use ZOD.It's an input validation library
