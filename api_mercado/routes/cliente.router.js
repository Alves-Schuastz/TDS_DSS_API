const routes = require("express").Router();
const clienteController = require("../");
routes.post("/", clienteController.cadastro);
routes.get("/", clienteController.consultar);
routes.put("/:id([0-9]+)", clienteController.atualizar);
routes.delete("/", clienteController.);

module.exports = routes;