

const express = require("express")
const {register,login} = require("./auth.controller")
const router = express.Router();



app.post("/registering", register)

app.post("/logging", login)
module.exports = router;