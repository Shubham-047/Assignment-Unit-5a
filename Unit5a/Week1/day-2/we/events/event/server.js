const EventEmitter = require("events")
const eventEmitter = new EventEmitter()

const login = require("./login")

function checkLogin() {
    // const 
    eventEmitter.on("login", login)
    eventEmitter.emit("login",login)
}
checkLogin()