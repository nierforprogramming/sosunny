import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Database is connected");
  });
  await mongoose.connect(`${process.env.LOCAL_MONGODB_URI}/apiratelimit`);
};

export default connectDB;
