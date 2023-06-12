import express from "express";

const app = express();

const comidas = [
  { id: 1, titulo: "Parmegiana" },
  { id: 2, titulo: "Picanha" },
];

app.get("/", (request, response) => {
  response.status(200).send("Curso de Node");
});

app.get("/comidas", (request, response) => {
  response.status(200).json(comidas);
});

export default app;
