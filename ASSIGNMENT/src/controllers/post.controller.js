
const express = require("express")

const router = express.Router();
const authenticate = require("../middlewares/authenticate")
const Product = require("../models/product.model")

router.post("", authenticate, async (req, res) => {
    if(req.body.user_id==req.userID){
    req.body.user_id = req.userID;}
    else{
        return res.status(400).send({message : "tocken and user is diffrent"})
    }
    // console.log(req)
    // console.log(req.body)
    try{
        const product = await Product.create(req.body)
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
 
})

router.get("", async (req, res) => {
    try{
        const product = await Product.find().lean().exec();
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})
router.patch("/:id",authenticate, async (req, res) => {
    if(req.body.user_id==req.userID){
        req.body.user_id = req.userID;}
        else{
            return res.status(400).send({message : "tocken and user is diffrent"})
        }
    try{
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})
router.delete("/:id",authenticate, async (req, res) => {
    if(req.body.user_id==req.userID){
        req.body.user_id = req.userID;}
        else{
            return res.status(400).send({message : "tocken and user is diffrent"})
        }
    try{
        const product = await Product.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})

module.exports = router;