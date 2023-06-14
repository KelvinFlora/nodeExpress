import Parking from "../models/Parking.js";

class ParkingController {
  static listParking = async (request, response) => {
    const result = await Parking.find();
    response.status(200).json(result);
  };

  static listIdParking = async (request, response) => {
    const id = request.params.id;
    const result = await Parking.findById(id);
    response.status(200).json(result);
  };

  static registerParking = async (request, response) => {
    const data = request.body;
    const result = await Parking.create(data);
    response.status(201).json(result);
  };

  static updateParking = async (request, response) => {
    const id = request.params.id;
    const data = request.body;
    const result = await Parking.updateOne({ _id: id }, data);
    response.status(201).json(result);
  };

  static deleteParking = async (request, response) => {
    const id = request.params.id;
    const result = await Parking.deleteOne({ _id: id });
    response.status(200).json(result);
  };
}

export default ParkingController;
