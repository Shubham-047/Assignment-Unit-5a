const nodemailer = require("nodemailer");

 let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "025f6c6606f4f5", // generated ethereal user
      pass: "ee4489e341d47e", // generated ethereal password
    },
 });
  
module.exports = transporter;