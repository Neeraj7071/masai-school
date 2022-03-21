const mongoose= require("mongoose");

const SubmissionSchema=new mongoose.Schema(
    {
        evalution_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"evalution",
            required:"true"
        },
        student_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"student",
            required:true,
        },
        marks:{type:Number,min:0,max:100,required:true},
    },
    {
        versionKey:false,
        timestamps:true,
    }
)

module.exports = mongoose.model("submission", SubmissionSchema);
