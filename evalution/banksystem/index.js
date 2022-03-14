const express=require("express");
const mongoose=require("mongoose");
const app=express();

const connect=()=>{
	return mongoose.connect("mongodb+srv://neeraj:khajuriya1234@cluster0.vo7j0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}




// User

	// firstName (required)
	// middleName (optional)
	// lastName (required)
	// age (required)
	// email (required )
	// address ( required )
	// gender ( optional and should default to Female )
	// type (optional and it can take value of customer or employee and if not provided then default to customer )
	// createdAt (required)
	// updatedAt (required)
	// BranchDetail


const userSchema=new mongoose.Schema({
	User:{
	firstName:{type:String,required:true},
	middleName:{type:String,required:false},
	lastName:{type:String,required:true},
	age:{type:Number,required:true},
	email:{type:String,required:true},
	address:{type:String,required:true},
	gender:{type:String,enum:["Female","Male","Other"],required:false,default:"Female"},
	type:{type:String,enum:["customer","employee"],required:false,default:"customer"},
	MasterAccount:{
		balance:{type:Number,required:true}
	},
	SavingsAccount:{
		account_number:{type:Number,required:true,unique:true},
		balance:{type:Number,required:true},
		interestRate:{type:Number,required:true}
	},

	FixedAccount:{
		account_number:{type:Number,required:true,unique:true},
		balance:{type:Number,required:true},
		interestRate:{type:Number,required:true},
		startDate :{type:String,required:true},
		maturityDate :{type:String,required:true}
	}

},
	BranchDetail:{
		name:{type:String,required:true},
		address :{type:String,required:true},
		IFSC :{type:String,required:true},
		MICR :{type:Number,required:true},
	}

},
{
	versionKey:false,
	timestamps:true
})
	


		app.listen(5000,async ()=>{
			try{
				await connect();
			}
			catch(err){
				console.log(err)
			}
	console.log("listening at 5000");
})