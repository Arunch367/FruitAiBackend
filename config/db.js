import mongoose from "mongoose";
import dotenv from "dotenv";

// Load .env file
dotenv.config();

const mongoUrl = process.env.MONGO_URL;

export const connectDb = async () => {
  await mongoose.connect(mongoUrl).then(() => console.log("DB connceted"));
};
