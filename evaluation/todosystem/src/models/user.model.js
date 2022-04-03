// firstName ( String, required)
// lastName ( String, optional)
// email ( String, required)
// password ( String, required)
// createdAt
// updatedAt

const mongoose=require("mongoose");


const userSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
})
const user=mongoose.model("users",userSchema)
module.exports=user