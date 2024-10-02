const express = require("express");
const alunoRouter = require("./aluno.router")

const routes = aluno.Router();

routes.use("/alunos", alunoRouter);

module.exports = routes;