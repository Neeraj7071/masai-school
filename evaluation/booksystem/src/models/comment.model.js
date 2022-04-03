const mongoose=require("mongoose");


const comments=mongoose.Schema({
    body:{type:String,required:true},
    book:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"books",
        required:true,
    },
    book:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true,
    }
},{
    verionKey:false,
    timestamps:true
})

module.exports=mongoose.model("comments",comments);


// body ( string, required)
// timestamps (string, required)