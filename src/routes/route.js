const express = require("express");

// importamos la ruta de la api
const tarjetasRouter = require("./creditCards");

const routerApi = (app) => {
  const router = express.Router();
  app.use("/api", router);
  router.use("/tarjetas", tarjetasRouter);
};

module.exports = routerApi;
