const mongoose = require("mongoose")
const dogSchema = mongoose.Schema({
name: String,
breed: String,
age: Number
})
module.exports = mongoose.model("dog", dogSchema)