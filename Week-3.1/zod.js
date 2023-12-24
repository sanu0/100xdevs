/**@Author -- sanu0 */

const express = require("express");
const zod = require("zod");
const app = express();

//const schema = zod.array(zod.number());

/**We can design schema for the sign in like this given below
 * {
 *      email : string => email
 *      password : atleast 8 character long
 *      country : "IN","US"
 * }
 */

function validateInput(obj){
    const schemaSignIn = zod.object({
        email : zod.string().email(),
        password : zod.string().min(8),
    })
    const response = schemaSignIn.safeParse(obj);
    console.log(response);
    if(response.success){
        return obj;
    }else{
        return false;
    }
}


app.use(express.json());

app.post("/login",function(req,res){
    //kidneys = [1,2]
    const input = req.body;
    

    if(!validateInput(input)){
        res.status(411).json({
            msg : "Input is invalid"
        })
    }else{
        res.json({
            input
        })
    }
});

//global catches
app.use(function(err,req,res,next){
    // res.json({
    //     msg : "Sorry Something is up with our server!",
    // })
    console.log("There is an error!")
})

app.listen(3000);