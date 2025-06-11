import mongoose from "mongoose";
import { Certificates } from "@/models/certificate";
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
  const certificates = await Certificates.find({});
  return NextResponse.json({
    certificates
  }, { status: 200 })
}