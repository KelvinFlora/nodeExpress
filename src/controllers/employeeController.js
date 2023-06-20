import Employees from "../models/Employee.js";

class EmployeeController {
  static listEmployees = async (request, response) => {
    try {
      const result = await Employees.find();
      if (result.length > 0) {
        response.status(200).json(result);
      } else {
        response.status(404).json({
          message: "Não foi possível encontrar a lista de funcionários!",
        });
      }
    } catch {
      response.status(500).json({ message: "Erro interno do servidor!" });
    }
  };

  static listIdEmployees = async (request, response) => {
    const id = request.params.id;

    try {
      const result = await Employees.findById(id);
      if (result.length > 0) {
        response.status(200).json(result);
      } else {
        response
          .status(404)
          .json({ message: "ID de funcionário não encontrado!" });
      }
    } catch (error) {
      response.status(500).json({ message: "Erro interno do servidor." });
    }
  };

  static listCpfEmployees = async (request, response) => {
    const cpf = request.params.cpf;

    try {
      const result = await Employees.find({ cpf: cpf }).exec();
      if (result.length > 0) {
        response.status(200).json(result);
      } else {
        response.status(404).json({ message: "CPF inválido!" });
      }
    } catch (error) {
      response.status(500).json({ message: "Erro interno do servidor." });
    }
  };

  static registerEmployees = async (request, response) => {
    const data = request.body;

    try {
      const result = await Employees.create(data);
      if (result.length > 0) {
        response.status(201).json(result);
      } else {
        response.status(400).json({
          message:
            "Não foi possível registrar o novo funcionário. Por favor verifique os dados inseridos e tente novamente!",
        });
      }
    } catch (error) {
      response.status(500).json({ message: "Erro interno do servidor." });
    }
  };

  static updateEmployees = async (request, response) => {
    const id = request.body.id;
    const data = request.body;

    try {
      const result = await Employees.updateOne({ _id: id }, data);
      if (result.length > 0) {
        response.status(201).json(result);
      } else {
        response.status(400).json({
          message: "Não foi possível atualizar as informações do funcionário!",
        });
      }
    } catch (error) {
      response.status(500).json({ message: "Erro interno do servidor." });
    }
  };

  static deleteEmployees = async (request, response) => {
    const id = request.params.id;

    try {
      const result = await Employees.deleteOne(id);
      if (result.length > 0) {
        response.status(201).json(result);
      } else {
        response.status(400).json({
          message: "Não foi possível excluir o funcionário da lista!",
        });
      }
    } catch (error) {
      response.status(500).json({ message: "Erro interno do servidor!" });
    }
  };
}

export default EmployeeController;
