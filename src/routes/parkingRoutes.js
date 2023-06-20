import express from "express";
import ParkingController from "../controllers/parkingController.js";

const router = express.Router();

router.get("/parking", ParkingController.listParking);

router.get("/parking/:id", ParkingController.listIdParking);

router.post("/parking", ParkingController.registerParking);

router.put("/parking/:id", ParkingController.updateParking);

router.delete("/parking/:id", ParkingController.deleteParking);

export default router;
