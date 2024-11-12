const routes = require("express").Router()
const pedidoController = require("../controller/pedido.controller")

routes.post("/", pedidoController.cadastro);
routes.get("/", pedidoController.consultar);
routes.get("/:id([0-9]+)", pedidoController.buscaPorId);
routes.put("/", pedidoController.atualizar);
routes.delete("/:id([0-9]+)", pedidoController.deletar);

module.exports = routes