const path=require("path");
const multer=require("multer");
const req=require("express/lib/request");

const storage=multer.diskStorage({
    destination:function (req,file,cb){
        cb(null.path.join(_dirname,"../my_upload"))
    },
    filrname:function(req,file,cb){
        const unnique=Date.now();
        cb(null,unnique+"-"+file.originalname)
    }
})


const filefilter=(req,file,cb)=>{
        if(filemimetype==="image/jpeg"||filemimetype==="image/pnb")
            cb(null,true);
        else
            cb(new console.error(("incoorect file type"),false))
}

const option={
    storage,
    filefilter,
    limits:{
        fileSize:1024*1024*10
    }
}
const uploads=multer(option);
module.exports=uploads