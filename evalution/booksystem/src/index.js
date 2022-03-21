const express=require("express");
const mongoose=require("mongoose");
const user=require("./controller/user.controller")
const books=require("./controller/books.controller")
const comment=require("./controller/comment.controller")

const app=express();
app.use(express.json());
app.use("/user",user);
app.use("/books",books)
app.use("/comment",comment)

module.exports=app