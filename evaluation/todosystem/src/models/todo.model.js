const mongoose=require("mongoose");


const todoSchema=new mongoose.Schema({
    title:{type:String,required:true},
    user:{
        type:String,
        required:true
    }
},{
    versionKey:false,
    timestamps:true
})
const todo=mongoose.model("todo",todoSchema)
module.exports=todo