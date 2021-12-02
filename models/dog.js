const mongoose = require("mongoose")
const dogSchema = mongoose.Schema({
name: String,
breed: {type:String,required:true},
age: {type:Number,min:0,max:100}
})
module.exports = mongoose.model("dog", dogSchema)