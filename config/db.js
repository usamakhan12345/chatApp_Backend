import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("DataBase Coneected Successfuly");
    // console.log('hello'.green);
  } catch (error) {
    console.log(`Error ---> ${error.message}`);
    process.exit(1);
  }
};
