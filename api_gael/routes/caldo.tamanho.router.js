const routes = require("express").Router()
const tamanhoController = require("../controller/caldo.tamanho.controller")

routes.post("/", tamanhoController.cadastro);
routes.get("/", tamanhoController.consultar);
routes.get("/:id([0-9]+)", tamanhoController.buscaPorId);
routes.put("/", tamanhoController.atualizar);
routes.delete("/:id([0-9]+)", tamanhoController.deletar);