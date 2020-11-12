const mongoose = require('mongoose')

const Country = new mongoose.Schema({
    Country:{type:String, default:""},
    CountrySlug:{type:String, default:""},
    Confirmed:{type:Number, default:""},
    Deaths:{type:Number, default:""},
    Recovered:{type:Number, default:""},
    Active:{type:Number, default:""},
})


module.exports = mongoose.model("country", Country)
