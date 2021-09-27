
const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    roll_number: { type: Number, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        res: "user",
        required: true
    }
    
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model("student", studentSchema)