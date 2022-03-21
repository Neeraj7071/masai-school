const path = require("path");

const express = require("express");

const transporter = require("../configs/mail");

const [User,adminuser] = require("../models/ragister.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);

    transporter.sendMail({
      from: '"Amazon admin" <admin@amazon.com><fhejen@gami.com>', // sender address
      to: user.email, // list of receivers
      subject: `Welcome to ABC system ${user.first_name} ${user.last_name}`, // Subject line
      text: `Hi ${user.first_name}`, 
      html:`<b> Hi ${user.first_name} <b>`
    });

    // console.log(adminuser)
    let time = 2000, //  = 2s
    increment = 1;

      adminuser.forEach((element) =>{
        var runner = setTimeout(()=> {
          transporter.sendMail({
        from: '"Amazon admin" <admin@amazon.com><fhejen@gami.com>', // sender address
        to: element, // list of receivers
        subject: `${user.first_name} ${user.last_name} has registered `, // Subject line
        text: `Please welcome ${user.first_name} ${user.last_name}`, 
        html:`<b> Please welcome ${user.first_name} ${user.last_name} <b>`
      });

          // clearTimeout(runner);
        }, time * increment);
        increment = increment + 1;
      });
        
    return res.status(201).send({ message: "Product created successfully" });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
