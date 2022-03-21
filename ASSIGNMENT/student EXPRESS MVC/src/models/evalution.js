const mongoose=require("mongoose");
const evalutionSchema= new mongoose.Schema(
    {
        date_of_evaluation:{type:Date,required:true},
        instructor:{type:String,required:true},
        batch_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "batch",
            required: true,
        }
    }
)

module.exports = mongoose.model("evalution", evalutionSchema);
