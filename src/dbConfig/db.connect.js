import mongoose from "mongoose";

const connection = { isConnected: false };

export async function connectToDb() {
  if (connection.isConnected) {
    console.log("Already connected to db");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    connection.isConnected = true;
    console.log("Db is connected");
  } catch (error) {
    console.error("DB connection error:", error);
    throw error;  // Don't exit process here in API route
  }
}
