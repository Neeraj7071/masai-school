const express = require("express");

const attendence = require("./controllers/attend.controller");
const maxmark= require("./controllers/maxmark.controller")

const app = express();

app.use(express.json());

app.use("/attendatudent",attendence);

app.use("/maxmarks",maxmark);

module.exports = app;
