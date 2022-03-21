const express = require("express");

const productsController = require("./controllers/ragister.controllers");

const app = express();

app.use(express.json());

app.use("/registering", productsController);

module.exports = app;
