const express = require("express");
const app = express();

const connect = require("./configs/db");

const userController = require("./controllers/user.controller");

// const app = express();
app.use(express.json());

app.use("/users", userController);

app.listen(2244, async () => {
    await connect()
        console.log("listening to port 2244")
});


