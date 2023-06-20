import express from "express";
import EmployeeController from "../controllers/employeeController.js";

const router = express.Router();

router.get("/funcionarios", EmployeeController.listEmployees);

router.get("/funcionarios/:id", EmployeeController.listIdEmployees);

router.get("/funcionarios/cpf/:cpf", EmployeeController.listCpfEmployees);

router.post("/funcionarios", EmployeeController.registerEmployees);

router.put("/funcionarios/:id", EmployeeController.updateEmployees);

router.delete("/funcionarios/:id", EmployeeController.deleteEmployees);

export default router;
