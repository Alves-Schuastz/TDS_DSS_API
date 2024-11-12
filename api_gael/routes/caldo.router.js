const routes = require("express").Router()
const caldoController = require("../controller/caldo.controller")

routes.post("/", caldoController.cadastro);
routes.get("/", caldoController.consultar);

module.exports = routes