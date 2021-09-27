const express = require("express");

const router = express.Router();
const Students = require("../model/student.model");


router.post("/",  async (req, res) => {
    console.log(req.file);
    const student = await Students.create({
        roll_number: req.body.roll_number,
      
    })
    return res.status(201).json({data: user})

})

// router.post("/")

module.exports = router;