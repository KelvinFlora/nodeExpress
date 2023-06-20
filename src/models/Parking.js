import mongoose from "mongoose";

const ClientParking = new mongoose.Schema({
  name: { type: String, required: true },
  carname: { type: String, required: true },
  licenseplate: { type: String, required: true },
  time: { type: String, required: true },
});

const Parking = mongoose.model("estacionamentos", ClientParking);

export default Parking;
