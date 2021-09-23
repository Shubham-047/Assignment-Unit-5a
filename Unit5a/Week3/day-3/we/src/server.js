const express = require("express");

const app = express();

const connect = require("./config/db");

const userController = require("./controller/user.controller")
app.use(express.json())

app.use("/users", userController)

app.listen(2334, async () => {
    await connect();
    console.log("listening to port 2334")
})

