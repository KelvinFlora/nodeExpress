import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://KelvinFlora:mbtest123@mycluster.zbp7tkm.mongodb.net/KinFood"
);

let db = mongoose.connection;

export default db;
