import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  foodName: { type: String, required: true },
  ingredients: { type: String, required: true },
  quantity: { type: Number, require: true },
  size: { type: String, required: true },
  table: { type: String, required: true },
});

const Foods = mongoose.model("comidas", foodSchema);

export default Foods;
