
const express= require("express");
const Submission= require("../models/submission.model")

const router = express.Router();


router.get("/:id",async(req,res)=>{
    try{
        const students= await Submission.find({evalution_id:req.params.id},{_id:0,student_id:1,marks:1})
        .populate("student_id").sort({marks:-1}).lean().exec();
        return res.status(200).send(students);
    }
    catch(err){
        return res.status(500).send({ message: err.message });
    }
})

module.exports=router