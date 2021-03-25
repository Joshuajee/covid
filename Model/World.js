const mongoose = require('mongoose')

const World = new mongoose.Schema({
    Confirmed:{type:Number, default:""},
    Deaths:{type:Number, default:""},
    Recovered:{type:Number, default:""},
    Active:{type:Number, default:""},
    Date:{type:String, default:""}
})



module.exports = mongoose.model("world", World)