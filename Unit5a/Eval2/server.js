const express = require("express")

const mongoose = require("mongoose")


const app = express();






app.listen(3045, function () {
   // await mongoose.connect();
    console.log("listening to port 3045")
})