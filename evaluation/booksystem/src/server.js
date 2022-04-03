const express= require("express");
const mongoose=require("mongoose");
const app=require("./index");
const connect=require("./configs/db");

app.listen(5000,()=>{
    try{
        connect()
    }
    catch(err){
        console.log(err)
    }
    console.log("listning port 5000")
})
