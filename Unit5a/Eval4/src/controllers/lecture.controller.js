const express = require("express");

const router = express.Router();
const Lecture = require("../model/student.model");


router.post("/",  async (req, res) => {
    console.log(req.file);
    const lecture = await Lecture.create({
        title: req.body.title,
        batch: req.body.batch
      
    })
    return res.status(201).json({data: lecture})

})
router.get("/",  async (req, res) => {
  const lecture = await Lecture.find().lean().exec()
    return res.status(200).json({lecture})

})
router.patch("/lecture/:id", async (req, res) => {
    const lecture = await Lecture.findByIdAndUpdate().lean().exec()
    return res.status(200).json({lecture})

})

router.delete("/lecture/:id", async (req, res) => {
    const lecture = await Lecture.findByIdAndDelete().lean().exec()
    return res.status(200).json({lecture})

})

// router.post("/")

module.exports = router;