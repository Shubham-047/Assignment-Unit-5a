const express = require("express")

const app = express();
const connect = require("./config/db")
const userController = require("./controllers/user.controller")
const studentController = require("./controllers/student.controller")
const lectureController = require("./controllers/lecture.controller")

app.use(express.json());
app.use("/users", userController)
app.use("/student", studentController)
app.use("/lectures", lectureController)

app.listen(2457, async function (req, res) {
    await connect();
    console.log("Listening to port 2457")
})