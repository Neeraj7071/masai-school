const express = require("express");

const todosController = require("./controllers/products.controllers");

const app = express();

app.use(express.json());

app.use("/products", todosController);

module.exports = app;
