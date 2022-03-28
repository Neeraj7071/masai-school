const express=require("express");
const Todo=require("../models/todo.model");
const auth=require("../medialwere/auth")

const router=express.Router();
router.get("",async(req,res)=>{
    try{
        const todo= await Todo.find().lean().exec();
        return res.status(200).send(todo)

    }
    catch(err){
        console.log(err);
      return   res.status(400).send(err)
}})
router.get("/:id",async(req,res)=>{
    try{
        const todo= await Todo.findById(req.params.id).lean().exec();
        return res.status(200).send(todo)

    }
    catch(err){
        console.log(err);
      return   res.status(400).send(err)
}})
router.post("",auth,async(req,res)=>{
    try{
        const todo= await Todo.create({title:req.body.title,
            user:req.userId
        }).lean().exec();
        return res.status(200).send(todo)

    }
    catch(err){
        console.log(err);
      return   res.status(400).send(err)
}})
router.patch("/:id",auth,async(req,res)=>{
    try{
        if(req.userId!=req.params.id)
        return   res.status(401).send({message:"wrong user token"})
        const todo= await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(200).send(todo)

    }
    catch(err){
        console.log(err);
      return   res.status(400).send(err)
}})
router.delete("/:id",auth,async(req,res)=>{
    try{
        if(req.userId!=req.params.id)
        return   res.status(401).send({message:"wrong user token"})
        const todo= await Todo.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(todo)

    }
    catch(err){
        console.log(err);
      return   res.status(400).send(err)
}})

module.exports=router