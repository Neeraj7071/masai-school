const express= require("express");
const mongoose=require("mongoose");

const app = express();

app.use(express.json());


const connect = ()=>{
    return mongoose.connect("mongodb+srv://neeraj:khajuriya1234@cluster0.vo7j0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

// Users :- has all the basic details like firstName, lastName, gender, dateOfBirth,
//  type(type will be student, admin or instructor) , createdAt, updatedAt

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

const User = mongoose.model("user", userSchema);

// Student :- has fields like roll id, current batch, createdAt, updatedAt
const studentSchema= new mongoose.Schema(
    {
        roll_id:{type:Number,required:true,unique:true},
        current_batch:{type:String,required:true}
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

const Student = mongoose.model("student", studentSchema);

// Batch :- has fields like Batch name, createdAt, updatedAt

const batchSchema= new mongoose.Schema(
    {
        Batch_name:{type:String,required:true},
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

const Batch = mongoose.model("batch", batchSchema);


// Evaluation :- has some evaluation related details like date_of_evaluation, 
// instructor( this will reference the user collection), batch_id ( this will reference the batches collection)

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

const Evalution = mongoose.model("evalution", evalutionSchema);

// Submission :- has some submissions related details like evaluation_id(this will reference the evaluations
//  collection), student_id(this will reference the user collection), marks, createdAt, updatedAt Now we need
//  to store students evaluation results so you need to first figure out where ideally it should be saved 
// and then we should be able to run the following queries


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

const Submission = mongoose.model("submission", SubmissionSchema);

// fetch all students who gave a particular evaluation

app.get("/attendatudent/:id",async(req,res)=>{
    try{
        const students= await Submission.find({evalution_id:req.params.id},{_id:0,student_id:1})
        .populate("student_id").lean().exec();
        return res.status(200).send(students);
    }
    catch(err){
        return res.status(500).send({ message: err.message });
    }
})

// fetch the student with his personal details who scored the highest marks in the evaluation

app.get("/maxmarks/:id",async(req,res)=>{
    try{
        const students= await Submission.find({evalution_id:req.params.id},{_id:0,student_id:1,marks:1})
        .populate("student_id").sort({marks:-1}).lean().exec();
        return res.status(200).send(students);
    }
    catch(err){
        return res.status(500).send({ message: err.message });
    }
})

// Refactor the code into an MVC pattern



app.listen(5000, async () => {
    try {
      await connect();
    } catch (err) {
      console.log(err);
    }
  
    console.log("listening on port 5000");
  });