const express = require('express')
const mongoose = require('mongoose')
const config = require("./Config/config")
const axios = require("axios")

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


//set to true if you want to restart the app else set to false
const  restart = false

if(restart){
    require('./start')
}

axios.get("https://api.covid19api.com/summary").
then(data =>{

  let summary_obj = new summary()
  summary_obj.Global = data.data.Global
  summary_obj.Countries = data.data.Countries
  summary_obj.Date = data.data.Date
  summary_obj.save()

  console.log(data)

  for(let i  = 0; i < data.data.Countries.length; i++){

    let country_obj = new country()

    country_obj.CountrySlug = data.data.Countries[i].Slug
    country_obj.Country = data.data.Countries[i].Country
    country_obj.Confirmed = data.data.Countries[i].Confirmed
    country_obj.Recovered = data.data.Countries[i].Recovered
    country_obj.Active = data.data.Countries[i].Active
    country_obj.Deaths = data.data.Countries[i].Deaths
    country_obj.Date = data.data.Countries[i].Date

    country_obj.save()

  }

}).catch({

})
  
//home api route
app.get('/api/home', (req, res) =>{
    
    summary.findOne({},(err, data) =>{
        console.log("Attempting to make retrieve data from mongodb")
        if(err){
            res.json({"err":err})
            console.log("Failed to retrieve data")
        }else{
            res.json({response:data})
            console.log(data)
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