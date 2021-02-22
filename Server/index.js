const express = require('express')
const mongoose = require('mongoose')
const config = require("./Config/config")

//update the database daily
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


//set to true if you want to restart the app else set to false
const  restart = true

if(restart){
    require('./start')
}


//home api route
app.get('/api/home', (req, res) =>{
    
    summary.findOne().sort("-_id").exec(function(err, data){
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

            if(data.length <= 50){

                res.send(data)

            }else{
                res.send(data)
            }
            
        }
    })

})

/*

function fetchCountry(country_slug){

    let uri = "https://api.covid19api.com/dayone/country/" + country_slug

            axios.get(uri).
            then(country =>{

                console.log(country.data.length)

                let data = []

                countryModel.deleteMany({ CountrySlug: slug }, function (err) {
                    if (err) return handleError(err);

                    console.log("deleted")
                });

                for(let i = 0; i < country.data.length; i++){

                    console.log(slug)
                    console.log(country.data[i].Country)
                    console.log(country.data[i].Confirmed)
                    console.log(country.data[i].Recovered)
                    console.log(country.data[i].Active)
                    console.log(country.data[i].Deaths)

                    data.push({"CountrySlug": slug,
                               "Country": country.data[i].Country,
                               "Confirmed": country.data[i].Confirmed,
                               "Recovered": country.data[i].Recovered,
                               "Active" : country.data[i].Active,
                               "Deaths" : country.data[i].Deaths,
                               "Date" : country.data[i].Date})
               
                }

                countryModel.insertMany(data)

            }).catch(error =>{

                console.log("error " + error)

            })


}
*/


//world api route
app.get('/api/world/', (req, res) =>{
    //{CountrySlug: req.params.country }, 
    country.find((err, data)=>{
        if(err){
            res.json({"err":err})
            console.log("Failed to retrieve data " + err)
        }else{
            res.send(data)
            console.log(data.length)
            for(let i = 0; i < 2; i++){

                country.update({Date: data[i].Date}, (err, data) => {
                    if(err){
                        res.json({"err":err})
                        console.log("Failed to retrieve data " + err)
                    }else{
                    console.log("DDDDD")

                    }
                })

                //console.log(data[i].Confirmed + " " + data[i].Recovered + " " + data[i].Active + " " + data[i].Deaths + " " + data[i].Date)
                //console.log(data[i].Confirmed)
            }
            
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