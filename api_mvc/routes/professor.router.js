const express = require('express');
const professorController = require("../controller/professores.controller")


const routes = express.Router();

routes.post("/cadastrar", professorController.cadastro)     
module.exports = routes;