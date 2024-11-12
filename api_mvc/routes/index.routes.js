const express = require('express');
const alunoRouter = require('./aluno.router')
const professorRouter = require('./professor.router');
const salaRouter = require ('./sala.router')


const routes = express.Router();

routes.use("/aluno", alunoRouter);
routes.use("/professor", professorRouter);
routes.use("/sala", salaRouter);
