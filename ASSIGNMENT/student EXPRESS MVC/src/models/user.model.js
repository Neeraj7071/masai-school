const mongoose=require("mongoose");

const userSchema= new mongoose.Schema(
    {
        firstName:{type:String,required:true},
        lastName:{type:String,required:true},
        gender:{type:String,enum:["Male","Female"],required:true},
        type:{type:String,enum:["student","admin","instructor"],required:false,default:"student"}
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

module.exports= mongoose.model("user", userSchema);
