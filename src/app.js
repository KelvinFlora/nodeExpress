import express from "express";
import db from "./config/dbConnect.js";
import Foods from "./models/Food.js";

db.on(
  "error",
  console.log.bind(console, "Não foi possível conectar ao banco de dados!")
);
db.once("open", () => {
  console.log("Conexão com o banco de dados feita com sucesso!");
});

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).send("Curso de Node");
});

app.get("/comidas", async (request, response) => {
  const foods = await Foods.find();
  response.status(200).json(foods);
});

app.get("/comidas/:id", async (request, response) => {
  const id = request.params.id;

  const result = await Foods.findById(id);

  response.status(201).json(result);
});

app.post("/comidas", async (request, response) => {
  const data = request.body;

  const result = await Foods.create(data);

  response.status(201).json(result);
});

app.put("/comidas/:id", async (request, response) => {
  const id = request.params.id;
  const data = request.body;

  const result = await Foods.updateOne({ _id: id }, data);

  response.status(201).json(result);
});

app.delete("/comidas/:id", async (request, response) => {
  const id = request.params.id;

  const result = await Foods.deleteOne({ _id: id });
  response.status(200).json(result);
});

export default app;
