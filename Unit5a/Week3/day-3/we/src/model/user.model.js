
const express = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    email: { type: String, required: true },
    pincode: { type: Number, required: true },
    age: { type: Number, required: true },
    gender : {type: String , required: true}
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("user", userSchema)

//rezex for validation
// (http(s)?:\/\/.)?(ftp(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{0,256}\.[a-z] 
// {2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)
