const routes = require("express").Router()
const pastelController = require("../controller/pastel.controller")

routes.post("/", pastelController.cadastro);
routes.get("/", pastelController.consultar);

