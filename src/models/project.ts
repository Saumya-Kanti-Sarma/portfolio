// models/Project.js
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  github_url: String,
  deployed_url: String,
  likes: Number
}, { collection: "projects" });

export const Project = mongoose.models.projects || mongoose.model("projects", projectSchema);