const express = require("express");

// importamos la ruta de la api
const tarjetasRouter = require("./creditCards");

const routerApi = (app) => {
  const routes = express.Router();
  app.use("/api", routes);
  app.use("/api/tarjetas", tarjetasRouter);
};

module.exports = routerApi;
