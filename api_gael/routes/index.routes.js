const routes = require("express").Router();
const clienteRouter = require("./cliente.router");
const pedidoRouter = require("./pedido.router");
const pastelRouter = require("./pastel.router");
const caldoRouter = require("./caldo.router");

routes.use("/cliente", clienteRouter);
routes.use("/pedido", pedidoRouter);
routes.use("/pastel", pastelRouter);
routes.use("/caldo", caldoRouter);

module.exports = routes;