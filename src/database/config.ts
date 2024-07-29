import mongoose from "mongoose";
import dotenv from "dotenv";

import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
const uri = String(process.env.MONGODB_LOCAL_URL);
const options = {
  dbName: "PaintReady",
};

export const connectDB = async () => {
  try {
    console.log(uri);
    const response = await mongoose.connect(uri, options);
    console.log(`connected with ${response.connection.name}`)
  } catch (error) {
    console.log(`error occured`,error)
  }
};
