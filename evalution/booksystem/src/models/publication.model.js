const mongoose=require("mongoose");


const publication=mongoose.Schema({
    name:{type:String,required:true},
    book:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"books",
        required:true,
    }
},{
    verionKey:false,
    timestamps:true
})

module.exports=mongoose.model("publication",publication);


// name ( references post collection)
// timestamps (string, required)