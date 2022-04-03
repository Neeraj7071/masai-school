const mongoose=require("mongoose");


const books=mongoose.Schema({
    likes:{type:Number,required:false,default:0},
    coverImage:{type:String,required:true},
    content:{type:String,required:true},
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    }
},{
    verionKey:false,
    timestamps:true
})

module.exports=mongoose.model("books",books);


// likes (integer, minimum default is 0)
// coverImage (string, required and it can be 1 only)
// content ( string, required)
// timestamps (string, required)