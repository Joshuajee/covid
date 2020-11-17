const mongoose = require('mongoose')
const config = require("../Config/config")
const axios = require('axios')
const cron = require('node-cron')


//Require the summary schema
const summary = require("../Model/Summary")

//set up default mongoose connection
mongoose.connect(config.DataBaseURI, {useNewUrlParser:true, useUnifiedTopology:true})

//Get the connection
const db = mongoose.connection

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))




 cron.schedule('* 21 * * *', () => {

  console.log("cron activated")
  axios.get("https://api.covid19api.com/summary").
  then(data =>{

    let summary_obj = new summary()
    summary_obj.Global = data.data.Global
    summary_obj.Countries = data.data.Countries
    summary_obj.Date = data.data.Date
    summary_obj.save()

    console.log(data)

  }).catch((error) => {
      console.log("errr" + error)
  })

},{
  scheduled: true,
  timezone: "America/Sao_Paulo"
})