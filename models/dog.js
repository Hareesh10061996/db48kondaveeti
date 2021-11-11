const mongoose = require("mongoose")
const dogSchema = mongoose.Schema({
dog_name: String,
breed: String,
Age: Number
})
module.exports = mongoose.model("dog", dogSchema)