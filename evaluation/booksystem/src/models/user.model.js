const mongoose=require("mongoose");


const user=mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:false},
    age:{type:String,min:1,max:150,required:true},
    email:{type:String,required:true,unique:true},
    profileImages:[{type:String,required:true}]

},{
    verionKey:false,
    timestamps:true
})

module.exports=mongoose.model("users",user);
// firstName (string, required, minimum length 3 and maximum length 30)
// lastName (string, optional, if given then minimum length 3 and maximum length 30)
// age (integer, required, should be between 1 and 150)
// email (string, required, unique)
// profileImages: (array of imageUrls and atleast 1 profile image is required)
// timestamps (string, required)