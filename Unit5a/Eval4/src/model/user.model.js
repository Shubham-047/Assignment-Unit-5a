
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { trpe: String, required: true },
    password: { trpe: String, required: true },
    roles: { type: String, required: true },
    profile_pic_url :{ type: String, required: true }
})

module.exports = mongoose.model("user", userSchema)