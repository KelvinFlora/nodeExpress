import express from "express";
import db from "./config/dbConnect.js";
import Foods from "./models/Food.js";
import routes from "./routes/index.js";

db.on(
  "error",
  console.log.bind(console, "Não foi possível conectar ao banco de dados!")
);
db.once("open", () => {
  console.log("Conexão com o banco de dados feita com sucesso!");
});

const app = express();

app.use(express.json());

routes(app);

export default app;
