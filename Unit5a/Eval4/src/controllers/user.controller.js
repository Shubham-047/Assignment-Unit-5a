const express = require("express");

const router = express.Router();
const User = require("../model/user.model");
// const { single } = require("../utils/file_uploads");
const upload = require("../utils/file_uploads")

router.post("/single", upload.single("profile_pic"), async (req, res) => {
    console.log(req.file);
    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        roles: req.body.roles,
         profile_pic_url: req.body. profile_pic_url
    })
    return res.status(201).json({data: user})

})
router.get("/single", upload.single("profile_pic"), async (req, res) => {
    
    return res.status(200).json({user})

})

// router.post("/")

module.exports = router;