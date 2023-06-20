import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cpf: { type: String, required: true },
  age: { type: Number, required: true },
  adress: { type: String, required: true },
  companyEntry: { type: String, required: true },
});

const Employees = mongoose.model("funcionarios", EmployeeSchema);

export default Employees;
