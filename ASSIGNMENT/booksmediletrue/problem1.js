const express=require("express");
const app=express();
app.use(logger);

app.get("/books",(req,res)=>{
    return res.send({route:"/books"})
})

app.get("/librarias",checkPermission,(req,res)=>{
    return res.send({route:"/libraries",permission:req.role})
})

app.get("/authors",checkPermission,(req,res)=>{
    return res.send({route:"/authors",permission:req.role})
})
function checkPermission(req,res,next){
    if(req.path==="/librarias"){
        req.role=true;
    }
    else if(req.path==="/authors"){
        req.role=true;
    }
    console.log("called")
    next()
}

function logger(req,res,next){
    console.log("Logger");
    next();
}

app.listen(4000,function(){
    console.log("listening on port 4000")
})