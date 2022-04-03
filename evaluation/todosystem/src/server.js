const app=require("./index");
const connect=require("./configs/db")


app.listen(5000,async()=>{
    try{
        connect()
    }
    catch(err){
        console.log(err)
    }
    console.log("lisning port 5000")
})