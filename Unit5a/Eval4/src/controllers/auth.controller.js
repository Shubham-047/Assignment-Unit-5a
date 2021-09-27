const User = require("../model/user.model")

const jwt = require("jsonwebtoken")
const { validationResult} = require("express-validator")

const newToken = (user) => {
    return jwt.sign({user:user}, process.env.JWT_SECRET_KEY)
}

const register = async (req, res) => {
    
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json()
    }
}