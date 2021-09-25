const express = require("express");

const User = require("../models/user.model")
const transporter = require("../configs/mail")
const router = express.Router();

router.get("", async (req, res) => {
    const page = +req.query.page || 1;
    const size = +req.query.size || 10;

    const offset = (page - 1) * size; //0 for page 1, 2 for page 10
    
    const query = { age: { $lt: 10 } };

    const users = await User.find(query).skip(offset).limit(size).lean().exec();

    const totalDocuments = await User.find(query).countDocuments();

    const totalPages = Math.ceil(totalDocuments / size);


//   await transporter.sendMail({
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Welcome to ABC {user.first_name}", // Subject line
//     text: "Hi  {user.first_name}, Please confirm the mail", // plain text body
//     html: "<b>Hi  {user.first_name}, Please confirm the mail</b>", // html body
//   });



    return res.status(200).json({users,totalPages})

})

router.post("", async (req, res) => {
    const user = await User.create(req.body);

     await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: `Welcome to ABC ${user.first_name} ${user.last_name}`, // Subject line
    text: `Hi  ${user.first_name}, Please confirm the mail`, // plain text body
    html: "<b>Hi  `${user.first_name}`, Please confirm the mail</b>", // html body
  });
    res.status(201).send(user)
    

})

module.exports = router;