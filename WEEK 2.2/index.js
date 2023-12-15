//create and expose a http server

const express = require("express");
const bodyParser = require("body-parser") 

const app = express()
const port = 3000

//middlewares
app.use(bodyParser.json());

app.get('/', function(req, res){
    //run a ml model (if path is /backend/api-conversation for chatgpt)
    res.send('Hello World!')

})
app.get('/route-handler', function(req, res){
    res.json({
        name : "shanu",
        age : 23
    })

})

app.post('/route-post', function(req, res){
    console.log(req.query)
    console.log(req.body)
    res.send('the request body is : ');
})

app.listen(port,function(){
    console.log(`Example app listening on port ${port}`)
})

//After you run this code you will see that using express framework
//we cannot get the body of the request that is sent to server
// using req.body method.
//It is because express framework does not provide us anything like that to
//get the body of the request.
//So we use the new framework called body-parser and we install it
//using `npm install body-parser` command.

//http://localhost:3000/route-post?msg="changed"&num=89&sum=78 in this after ? mark
// there is query parameters which is used as you have limited space to send data from client to server
//so we use query parameters here.