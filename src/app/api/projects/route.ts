import mongoose from "mongoose";
import { Project } from "@/models/project";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(`${process.env.MONGO_URI}`)
    .then(() => {
      console.log("DB connected");
    })
    .catch((error) => {
      return NextResponse.json({
        message: "error in mongodb connection",
        error
      }, { status: 500 })
    });
  const projects = await Project.find({});
  return NextResponse.json({
    projects
  }, { status: 200 })
}