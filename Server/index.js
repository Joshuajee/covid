const express = require('express')
const mongoose = require('mongoose')
const config = require("./Config/config")
const axios = require('axios')
const cron = require('node-cron');

//Require a schedule task of getting summary
require("./Cron")

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


  
//home api route
app.get('/api/home', (req, res) =>{
    
    summary.find((err, data) =>{
        console.log("Attempting to make retrieve data from mongodb")
        if(err){
            res.json({"err":err})
            console.log("Failed to retrieve data")
        }else{
            res.json({response:data[0]})
            console.log(data[0])
        }
    })
  
})


//country api route
app.get('/api/country/:country', (req, res) =>{

    country.find({CountrySlug: req.params.country }, (err, data)=>{
        if(err){
            res.json({"err":err})
            console.log("Failed to retrieve data " + err)
        }else{
            res.send(data)
            
        }
    })

})

//check if we are in a production environment
if(process.env.NODE_ENV === "production"){
    
    //serve static production asset
    app.use(express.static("../Covid19stat/build"))

    //get the current file path
    const path = require('path')

    //handle any route that is missing from the Server
    app.get('*', (req, res) =>{  
        res.sendFile(path.resolve(__dirname, "../Covid19stat", "build", "index.html"))
        console.log(path.resolve(__dirname, "../Covid19stat", "build", "index.html"))
    })

}



//check if there is an environment port
const PORT = process.env.PORT || 5000

app.listen(PORT)