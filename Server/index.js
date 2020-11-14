const express = require('express')
const mongoose = require('mongoose')
const config = require("./Config/config")
const CronJob = require('cron').CronJob;
const axios = require('axios')

//const cron = require("./Cron")

//Create an express app
const app = express()

//Require the summary schema
const summary = require("./Model/Summary")

//Require the summary schema
const country = require("./Model/Country")

//set up default mongoose connection
mongoose.connect(config.DataBaseURI, {useNewUrlParser:true, useUnifiedTopology:true})

//Get the connection
const db = mongoose.connection

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

var job = new CronJob('* * 1 * * *', function() {
    axios.get("https://api.covid19api.com/summary").then(({data}) =>{
        console.log(data)
    })

});
job.start();
        
//Home Route
app.get('/api/home', (req, res) =>{
    
    summary.find((err, data)=>{
        if(err){
            res.json({"err":err})
            console.log("Failed to retrieve data")
        }else{
            res.send(data[0])
            
        }
    })
  
})

app.get('/api/country', (req, res) =>{

    country.find((err, data)=>{
        if(err){
            res.json({"err":err})
            console.log("Failed to retrieve data " + err)
        }else{
            res.send(data[0])
            
        }
    })

})

summary.find((err, data)=>{
    if(err){
        //res.json({"err":err})
        console.log("Failed to retrieve data")
    }else{
       // res.send(data[0])
       console.log(data)
    }
})


const PORT = process.env.PORT || 5000

app.listen(PORT)

