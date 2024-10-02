const express = require("express")

const alunoController = require("../controller/aluno.controller")

const routes = express.Router();

routes.post("/alunos-cadastrar", alunoController.cadastro)
routes.put("/alunos-atualizar", alunoController.atualizar)
routes.get("/alunos-buscar", alunoController.buscar)
routes.delete("/-alunos/:id[0-9]+", alunoController.deletar)

module.exports = routes;
