const express = require("express");
const bodyParser = require("body-parser");
const IndexRoutes = require("./routes/index.routes")

const conn = require("./mysql-connections");

const app = express();

app.use(bodyParser.json());
app.use(IndexRoutes);

app.listen (8080, ()=>{
    console.log("rodando na porta 8080")
});