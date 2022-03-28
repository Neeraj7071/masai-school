require("dotenv").config();
const jwt=require("jsonwebtoken");
const verify=(token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,process.nextTick.secret_code,(err,decoded)=>{
            if(err)
            return reject(err)

            return resolve(decoded);
        })
    })
}

const auth=async(req,res,next)=>{
    if(!req.headers.authorization)
    return res.status(400).send({messsage:"token  not found"})

    if(!req.headers.authorization.startsWith("Bearer "))
    return res.status(400).send({messsage:"token  not found"})

    const token =req.headers.authorization.trim().split(" ")[1];
    let decode;
    try{
        decode=await verify(token);

    }
    catch(err){
        console.log(err);
        return res.status(400).send({messsage:"token is wrong"})
    }
    req.userId=decode.user._id;
    return next()
}
module.exports=auth