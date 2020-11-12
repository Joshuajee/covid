const mongoose = require('mongoose')

//Require axios for making api request
const axios = require('axios')

//Require the summary schema
const country = require("./Model/Country")

const config = require("./Config/config")

//set up default mongoose connection
mongoose.connect(config.DataBaseURI, {useNewUrlParser:true, useUnifiedTopology:true})

//Get the connection
const db = mongoose.connection

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


var countriesSlug;
var countries = null;

axios.get("https://api.covid19api.com/summary").
then(({data}) =>{

    var len  = data.Countries.length
    countries = data.Countries
    console.log(len)
    console.log(countries[0])

    for(let i = 0; i < 1; i++){
        console.log(countries[i].Slug)
        axios.get("https://api.covid19api.com/dayone/country/"+countries[i].Slug).
        then(({country}) =>{

            for(let i = 0; i < countries.length; i++){
                console.log(country[i].Country)
                console.log(country[i].Confirmed)
                console.log(country[i].Recovered)
                console.log(country[i].Deaths)
                console.log(country[i].Active)
            }
            
        }).catch(({error}) => {
            console.log("error: " + error)
        })
    }  
  

}).catch(({error}) =>{
    console.log("error")
})



/*
for(let i = 0; i < len; i++){
    countriesSlug[i] = countries[i].Slug
}  

*/

//console.log(countriesSlug)

/*
for(let i = 0; i < 1; i++){
    console.log("Slug: " + data.Countries[i].Slug)
    let slug = data.Countries[i].Slug
    axios.get("https://api.covid19api.com/dayone/country/south-africa").
    then(({country}) =>{
        console.log(" co  " + country)
        for(let i = 0; i < countries.length; i++){
            console.log(country[i].Country)
            console.log(country[i].Confirmed)
            console.log(country[i].Recovered)
            console.log(country[i].Deaths)
            console.log(country[i].Active)
        }
        
    })
*/