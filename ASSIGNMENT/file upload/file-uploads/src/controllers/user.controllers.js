const express = require("express");

const User = require("../models/user.models");
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

router.post("", upload.single("profilePic"), async (req, res) => {
  try {
    //   const user = await User.create(req.body)
    const user = await User.create({
      firstName: req.body.firstName,
      lastName:req.body.lastName,
      profilePic: req.file.path,
    });
    // console.log(req.file.path)
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// router.post("/multiple", upload.any("profilePic"), async (req, res) => {
//   try {
//     const filePaths = req.files.map((file) => {
//       return file.path;
//     });

//     const user = await User.create({
//       firstName: req.body.firstName,
//       profilePic: filePaths,
//     });

//     return res.status(200).send(user);
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });


router.delete("/:id",async (req, res,cb) => {
  try {
    const item = await User.findByIdAndDelete(req.params.id).lean().exec();
    console.log(item)
    fs.unlink(item.profilePic,cb)
    return res.status(200).send(item);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// --- Refactor code ------
// router.post("", uploadFiles("profilePic", "single"), async (req, res) => {
//   try {
//     //   const user = await User.create(req.body)
//     const user = await User.create({
//       firstName: req.body.firstName,
//       profilePic: req.file.path,
//     });
//     return res.status(200).send(user);
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });

// router.post(
//   "/multiple",
//   uploadFiles("profilePic", "multiple"),
//   async (req, res) => {
//     try {
//       const filePaths = req.files.map((file) => {
//         return file.path;
//       });

//       const user = await User.create({
//         firstName: req.body.firstName,
//         profilePic: filePaths,
//       });

//       return res.status(200).send(user);
//     } catch (err) {
//       return res.status(500).send({ message: err.message });
//     }
//   }
// );

module.exports = router;
