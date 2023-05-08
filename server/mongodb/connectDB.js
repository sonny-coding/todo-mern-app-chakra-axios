import mongoose from "mongoose";

const connectDB = async (url) => {
  try {
    mongoose.get("strictQuery", true);
    await mongoose.connect(url);
    console.log("mongodb connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
