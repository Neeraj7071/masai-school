const express = require("express");
const connect = require("./configs/db");
const userController = require("./controllers/user.controller")
const productController = require("./controllers/post.controller")

const {register,login} = require("./controllers/auth.controller")
const app = express();

app.use(express.json());


app.use("/users", userController)


app.use("/post", productController)

app.listen(5000, async () => {
    try{
        await connect();
        console.log("listening on port 5000")
    }
    catch(err){
        console.log(err.message);
    }
});