const mongoosh=require("mongoose");

module.exports=()=>{
    return mongoosh.connect("mongodb+srv://neeraj:khajuriya1234@cluster0.vo7j0.mongodb.net/assiment?retryWrites=true&w=majority")
}