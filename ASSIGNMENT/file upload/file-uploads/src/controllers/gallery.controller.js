
const express = require("express");

const User = require("../models/gallery.model");
const fs =require("fs")
// const { uploadFiles } = require("../middlewares/uploads");
const upload = require("../middlewares/uploads");
const { fstat } = require("fs");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const users = await User.find().lean().exec();

    return res.status(200).send(users);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("/", upload.any("profilePics"), async (req, res) => {
    try {
      const filePaths = req.files.map((file) => {
        return file.path;
      });
      console.log(filePaths )
      const user = await User.create({
        userid: req.body.userid,
        profilePics: filePaths,
      });
  
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  
  router.delete("/:id",async (req, res,cb) => {
    try {
      const item = await User.findByIdAndDelete(req.params.id).lean().exec();
      console.log(item)
      item.profilePics.forEach(element => {
          fs.unlink(element,cb)   
      });
      return res.status(200).send(item);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  

  module.exports = router;