// models/Project.js
import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
  title: String,
  field: String,
  provider: String,
  url: String,
  image: String,
});

export const Certificates = mongoose.model("certificates", certificateSchema);