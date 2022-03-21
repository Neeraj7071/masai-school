const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "a996e56b5d0f34", // generated ethereal user
    pass: "eceef8db0e6a8d", // generated ethereal password
  },
});

