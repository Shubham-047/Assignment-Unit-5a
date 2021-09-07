const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Home Page")
})
app.get("/users", (req, res) => {
 //const name = req.users
    res.send(users)
})


app.listen(2000, () => {
    console.log("listening to 2345")
})