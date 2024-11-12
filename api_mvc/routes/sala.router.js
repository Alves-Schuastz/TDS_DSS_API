const express = require('express');
const salaController = require("../controller/sala.controller")

const routes = express.Router();

routes.post("/sala", salaController.cadastro)     
module.exports = routes;