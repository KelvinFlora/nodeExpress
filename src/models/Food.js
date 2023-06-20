import mongoose, { Schema } from "mongoose";

const foodSchema = new mongoose.Schema({
  foodName: { type: String, required: true },
  ingredients: { type: String, required: true },
  quantity: { type: Number, require: true },
  size: { type: String, required: true },
  table: { type: String, required: true },
  clientInfo: [{ type: Schema.Types.ObjectId, ref: "estacionamentos" }],
});

const Foods = mongoose.model("comidas", foodSchema);

export default Foods;
