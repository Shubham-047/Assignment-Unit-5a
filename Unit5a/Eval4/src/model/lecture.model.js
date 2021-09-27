
const mongoose = require("mongoose")

const lectureSchema = new mongoose.Schema({
    title: { type: String, required: true },
    batch:{type: String, required: true},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        res: "user",
        required: true
    }
    
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model("lecture", lectureSchema)