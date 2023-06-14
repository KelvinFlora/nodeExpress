import express from "express";
import comidas from "./foodRoutes.js";
import estacionamento from "./parkingRoutes.js";

const routes = (app) => {
  app.route("/").get((request, response) => {
    response.status(200).send("Curso de Node");
  });

  app.use(express.json(), comidas, estacionamento);
};

export default routes;
