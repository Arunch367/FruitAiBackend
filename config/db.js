import mongoose from "mongoose";

export const connectDb = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ArunChhabra:Chhabra367@cluster0.tycox9y.mongodb.net/fruitAi"
    )
    .then(() => console.log("DB connceted"));
};
