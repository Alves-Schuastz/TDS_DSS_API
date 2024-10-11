const express = require('express');
const alunosController = require("../controller/alunos.controller")


const routes = express.Router();

routes.post("/cadastrar", alunosController.cadastro)     
module.exports = routes;