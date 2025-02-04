const routes = require("express")
const autorController = require("../controller/autor.controller");

routes.post("/", autorController.post);
routes.get("/", autorController.get);
routes.put("/", autorController.put);
routes.delete("/:id([0-9]+)", autorController.delete);

module.exports = routes