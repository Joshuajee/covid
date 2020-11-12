const mongoose = require('mongoose')
const config = require("../Config/config")
const CronJob = require('cron').CronJob;
const axios = require('axios')


//Require the summary schema
const summary = require("./Model/Summary")

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
        

/*
var summary = new summaryModel()


var sum = new summary()
sum.Global = {"none":" OOOO"}
sum.Countries = ["oppp"]
sum.Date = "DATE"
sum.save()

 */
/*
module.exports = cron.schedule('1 * * * *', () => {
  console.log('running a task every minute');
})
*/
//module.exports = cronjob()