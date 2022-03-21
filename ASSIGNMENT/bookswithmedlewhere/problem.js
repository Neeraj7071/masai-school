const express=require("express");

const app=express();


app.get("/books",allBooks,function(req,res){
    return res.send("Fetching all books");
})

function allBooks(req,res,next){
    console.log("Fetching all books")
    next()
}

app.get("/books/:id",singleBooks,function(req,res){
    return res.send({bookName:req.name});
})

function singleBooks(req,res,next){
    console.log("Book")
    req.name=req.params.id;
    next();
}

app.listen(4000,()=>{
    console.log("listening on port 4000")
})