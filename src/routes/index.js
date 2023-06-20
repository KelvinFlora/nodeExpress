import express from "express";
import comidas from "./foodRoutes.js";
import Parking from "./parkingRoutes.js";
import funcionarios from "./employeeRoutes.js";

const routes = (app) => {
  app.route("/").get((request, response) => {
    response.status(200).send("Curso de Node");
  });

  app.use(express.json(), comidas, Parking, funcionarios);
};

export default routes;
