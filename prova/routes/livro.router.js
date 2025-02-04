const routes = require("express")
const livroController = require("../controller/livro.controller");

routes.post("/", livroController.post);
routes.get("/", livroController.get);
routes.put("/", livroController.put);
routes.delete("/:id([0-9]+)", livroController.delete);

module.exports = routes