const express=require("express");

const app=express();

app.get("",function(req,res){
    return res.send("Hello");
})
app.get("/books",function(req,res){
    return res.send({book1:"content1",book2:"content2",book3:"content3",book4:"content4"});
})
app.listen(4000,()=>{
    console.log("listening on port 4000")
})