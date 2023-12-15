/*
    You need to create 4 routes(4 things that the hospital can do)
    1. GET - User can check how many kidneys thay have and their health
    2. POST - User can add a new kidney
    3. PUT - User can replace a kidney, make it healthy
    4. DELETE - User can remove a kidney
*/ 

const express = require('express');
const app = new express();



let user = [{
        name : "john",
        kidneys : [{
            healthy : false,
        },{
            healthy : true,
        }]
}];

app.get('/get-details',function(req,res){
    const kidneys = user[0].kidneys;
    const numOfKidneys = kidneys.length;
    let numOfHealthyKidneys = 0;
    for(let i=0;i<kidneys.length;i++){
        if(kidneys[i].healthy){
            numOfHealthyKidneys++;
        }
    }
    let numOfUnhealthyKidneys = numOfKidneys - numOfHealthyKidneys;
    res.json({
        numOfKidneys,
        numOfHealthyKidneys,
        numOfUnhealthyKidneys
    })
})

//middlewares?
app.use(express.json());

app.post('/add-kidneys',function(req,res){
    const health = req.body.isHealthy;
    user[0].kidneys.push({healthy : health})
    //Here i am changing the global var .. it's like global database i am changing
    res.json({
        msg : "Done!"
    })  
})
//It replaces all the kidneys and make it healthy.
app.put('/replace-kidneys',function(req,res){
    //EDGE CASE -> If no unhealthy kidney that it should send 411 status code
    if(isThereAtleastOneUnhealthyKidney){
        const kidneys = user[0].kidneys;
        for(let i=0;i<kidneys.length;i++){
            kidneys[i].healthy = true;
        }
        res.json({
            msg : "Replaced all the kidneys!",
        })
    }else{
        res.status(411).json({
            msg : "You have no bad kidneys!"
        })
    }
    
})
//It remove all the unhealthy kidneys.
app.delete('/delete-unhealthy-kidneys',function(req,res){
    //EDGE CASE -> If no unhealthy kidney that it should send 411 status code
    if(isThereAtleastOneUnhealthyKidney()){
        const newKidneys = [];
        for(let i=0;i<user[0].kidneys.length;i++){
            if(user[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy : true
                })
            }
        }
        user[0].kidneys = newKidneys;
        res.json({
            msg : "Deleted all the unhealthy Kidneys."
        })
    }else{
        res.status(411).json({
            msg : "You have no bad kidneys!"
        })
    }
    
})
app.get('/',function(req,res){
    res.send("Welcome to our inMemory Hospital!")
})

function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;
    for(let i=0;i<user[0].kidneys.length;i++){
        if(!user[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}
app.listen(3000);