const mongoose = require('mongoose')

const SummarySchema = new mongoose.Schema({
    Global:{type:Object},
    Countries:{type:Array},
    Date:{type:String}
})


module.exports = summary = mongoose.model("summary", SummarySchema)