import Foods from "../models/Food.js";

class FoodController {
  static listFoods = async (request, response) => {
    const result = await Foods.find();
    response.status(200).json(result);
  };

  static listIdFoods = async (request, response) => {
    const id = request.params.id;

    const result = await Foods.findById(id);
    response.status(201).json(result);
  };

  static registerFood = async (request, response) => {
    const data = request.body;
    const result = await Foods.create(data);
    response.status(201).json(result);
  };

  static updateFood = async (request, response) => {
    const id = request.body.id;
    const data = request.body;

    const result = await Foods.updateOne({ _id: id }, data);
    response.status(201).json(result);
  };

  static deleteFood = async (request, response) => {
    const id = request.params.id;

    const result = await Foods.deleteOne({ _id: id });
    response.status(200).json(result);
  };
}

export default FoodController;
