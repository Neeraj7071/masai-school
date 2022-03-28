require("dotenv").config();
const jwt=require("jsonwebtoken")
const User=require("../models/user.model")
const express=require("express")
const router=express.Router()
const genratetoken=(user)=>{
    return jwt.sign({user},process.env.secret_code)
}

// POST /register endpoint to create new users
// POST /login endpoint to login the user
router.post("/register",async(req,res)=>{
    try{
        let user = await User.findOne({email:req.body.email})
        if(user)
        return res.status(400).send({message:"email already ragister"})

         user = await User.create(req.body);
        console.log(req.body)
        const token=genratetoken(req.body)
        return  res.status(200).send({user,token})
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})

router.post("login",async(req,res)=>{
    try{
        let user = await User.findOne({email:req.body.email})
        if(!user)
        return res.status(400).send({message:"invalide email and password"})

        let pass=req.body.password
        if(pass!=user.password)
        return res.status(400).send({message:"invalide email and password"})
        user = await User.create(req.body);
        const token=genratetoken(user)
        return  res.status(200).send({user,token})
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})

module.exports=router