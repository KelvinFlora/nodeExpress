import express from "express";

const app = express();

app.use(express.json());

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

app.get("/comidas/:id", (request, response) => {
  let index = findFood(request.params.id);
  comidas[index].titulo = request.body.titulo;
  response.status(200).json(comidas[index]);
});

app.post("/comidas", (request, response) => {
  comidas.push(request.body);
  response.status(201).send("A comida foi cadastrada com sucesso!");
});

app.put("/comidas/:id", (request, response) => {
  let index = findFood(request.params.id);
  comidas[index].titulo = request.body.titulo;
  response.status(200).json(comidas);
});

app.delete("/comidas/:id", (request, response) => {
  let { id } = request.params;
  let index = findFood(id);
  comidas.splice(index, 1);
  response.status(200).send(`A comida ${id} foi removida com sucesso!`);
});

function findFood(id) {
  return comidas.findIndex((comida) => comida.id == id);
}

export default app;
