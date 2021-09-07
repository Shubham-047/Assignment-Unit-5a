const express = require("express")

const app = express()

app.use(express.json())

app.use(sayPost)
app.post("/user/", sayPost, (res, req) => {
    const name = req.query.name;
    const age = req.query.age;
    console.log("post")
    res.send({name ,age })
})
// app.use(sayHello)


app.get("/", (req, res) => {
    console.log("loging")
    res.send("hello for api")
})

app.get("/", (req, res) => {
    console.log("loging23")
    res.send("hello for api")
})

function sayHello(res, req, next) {
    console.log("before login")
    next()
    console.log("after login")
}
function sayPost(res, req, next) {
     console.log("before post")
    next()
    console.log("after post")
}

app.listen(2345, () => {
    console.log("listening for 2345")
})