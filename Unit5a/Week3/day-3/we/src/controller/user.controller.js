const express = require("express")
const {body, validationResult} = require("express-validator")

const User = require("../model/user.model")
const router = express.Router();

router.post("",
    body("first_name").notEmpty().withMessage("Enter name"),
     body("last_name").notEmpty().withMessage("Enter name"),

    body("email")
        .not()
        .isEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Enter valid email"),
     
    body("pincode").isLength(6).withMessage("Enter valid pincode"),

    body("age").custom(value => {
        if (value < 1 || value > 100) throw new Error("age is required and must be between 1 to 100");
        return true

      
    }),
    body("gender").custom(value => {
        if (value == "Male") {
            return true;
        }
        else if (value == "Female") {
            return true;
        }
        else if (value == "Others") {
            return true;
        }
        else {
            throw new Error("Enter valid gender")
            return false;
        }
}),
    
  
    async function (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }



    const user = await User.create(req.body);

    res.status(201).send(user)
})
module.exports = router;