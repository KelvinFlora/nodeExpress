import express from "express";
import FoodController from "../controllers/foodController.js";

const router = express.Router();

router.get("/comidas", FoodController.listFoods);

router.get("/comidas/:id", FoodController.listIdFoods);

router.post("/comidas", FoodController.registerFood);

router.put("/comidas/:id", FoodController.updateFood);

router.delete("/comidas/:id", FoodController.deleteFood);

export default router;
