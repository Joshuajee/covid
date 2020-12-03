const mongoose = require('mongoose')

//Require axios for making api request
const axios = require('axios')

//Require the summary schema
const countryModel = require("./Model/Country")

const config = require("./Config/config")

//set up default mongoose connection
mongoose.connect(config.DataBaseURI, {useNewUrlParser:true, useUnifiedTopology:true})

//Get the connection
const db = mongoose.connection

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


var countriesSlug = []
var len = null


axios.get("https://api.covid19api.com/summary").
then(({data}) =>{

    len  = data.Countries.length
    
        let count = 0

        let cron = require('node-cron');
 
        let task = cron.schedule('*/15 * * * *', () => {

            let slug = data.Countries[count].Slug

            console.log("done " + count + "  " + slug)

            country.findOne({CountrySlug: slug }, (err, data)=>{
                if(err){
                   
                    
            let uri = "https://api.covid19api.com/dayone/country/"+data.Countries[count].Slug

            axios.get(uri).
            then(country =>{

                console.log(country.data.length)

                for(let i = 0; i < country.data.length; i++){

                    console.log(slug)
                    console.log(country.data[i].Country)
                    console.log(country.data[i].Confirmed)
                    console.log(country.data[i].Recovered)
                    console.log(country.data[i].Active)
                    console.log(country.data[i].Deaths)


                    const country_obj = new countryModel()

                    countryModel.deleteMany({ CountrySlug: slug }, function (err) {
                        if (err) return handleError(err);
                        // deleted at most one tank document
                        console.log("deleted")
                      });
                    
                    country_obj.CountrySlug = slug
                    country_obj.Country = country.data[i].Country
                    country_obj.Confirmed = country.data[i].Confirmed
                    country_obj.Recovered = country.data[i].Recovered
                    country_obj.Active = country.data[i].Active
                    country_obj.Deaths = country.data[i].Deaths
                    country_obj.Date = country.data[i].Date
            
                    country_obj.save()
               
                }

            }).catch(error =>{

                console.log("error " + error)

            })


                }else{

                    
                }
            })


            count++

            if(count + 1 >= len) task.destroy();

        });


}).catch(({error}) =>{
    console.log("error")
})
