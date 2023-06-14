import express from "express";
import foodController from "../controllers/foodController.js";

const router = express.Router();

router.get("/comidas", foodController.listFoods);

router.get("/comidas/:id", foodController.listIdFoods);

router.post("/comidas", foodController.registerFood);

router.put("/comidas", foodController.updateFood);

router.delete("/comidas", foodController.deleteFood);

export default router;
