const routes = require("express").Router();
const clienteController = require("../");
routes.post("/", clienteController.cadastro);
routes.get("/", clienteController.consultar);
routes.put("/:id([0-9]+)", clienteController.atualizar);
routes.delete("/", clienteController.deletar);
routes.get("/:id([0-9]+)", clienteController.buscaPorId);
module.exports = routes;