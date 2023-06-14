import express from "express";
import ParkingController from "../controllers/parkingController.js";

const router = express.Router();

router.get("/estacionamento", ParkingController.listParking);

router.get("/estacionamento/:id", ParkingController.listIdParking);

router.post("/estacionamento", ParkingController.registerParking);

router.put("/estacionamento/:id", ParkingController.updateParking);

router.delete("/estacionamento/:id", ParkingController.deleteParking);

export default router;
