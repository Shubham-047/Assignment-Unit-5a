
const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    roll_number: { type: Number, required: true },
    
})

module.exports = mongoose.model("student", studentSchema)