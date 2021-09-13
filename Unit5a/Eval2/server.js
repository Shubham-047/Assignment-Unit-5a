const express = require("express")

const mongoose = require("mongoose")

const connect = () => {
    return mongoose.connect(" mongodb://127.0.0.1:27017");
}
const app = express();

//for getting all users
app.get("/", (req, res) => {
    //console.log(users)
    const a = "user"
    res.send(a)
})






app.listen(3045, function () {
   // await mongoose.connect();
    console.log("listening to port 3045")
})