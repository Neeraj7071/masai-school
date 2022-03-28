const express=require("express");
const user=require("./controllers/auth.controller")
const app=express();

const todo=require("./controllers/todo.controller")
app.use(express.json());
app.use("/user",user)
app.use("/todo",todo)
module.exports=app
