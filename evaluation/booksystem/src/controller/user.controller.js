const express=require("express");
const mongoose=require("mongoose");
const malter=require("multer");
const { body, validationResult } = require('express-validator')
const uploadfile=require("../medileware/uploads")
const User=require("../models/user.model");
const res = require("express/lib/response");

const router=express.Router();


router.get("",async(req,res)=>{
    try{
        const user= await User.find().limit(10).lean().exec();
        return res.status(200).send(user);

    }
    catch(err){
        return res.status(500).send(err);
    }
})
router.post("",
body('firstName').isLength({ min: 3,max:30 }),
body("email").isEmail(),uploadfile.any("profileImages"),
function await (req,res){
    try{ 
        const filepath=req.files.map((file)=>{
            return file.path;
        })

        const user=await.User.create({
            firstName:res.body.firstName,
            lastName:res.body.lastName,
            age:res.body.lastName,
            email:res.body.lastName,
            profileImages:filepath
        })

        return res.status(200).send(user);
    }
    catch(err){
        return res.status(500).send(err);
    }
})