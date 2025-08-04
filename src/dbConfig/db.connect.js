import mongoose from "mongoose";

let isConnected = false;

export async function connectToDb() {
  if (isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }

  if (mongoose.connection.readyState === 1) {
    isConnected = true;
    return;
  }

  try {
    mongoose.set("strictQuery", false);

    await mongoose.connect(process.env.MONGO_URI, {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    isConnected = true;
    console.log("MongoDB connected successfully");

    mongoose.connection.on("connected", () => {
      console.log("Mongoose connected to MongoDB");
    });

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
      isConnected = false;
    });

    mongoose.connection.on("disconnected", () => {
      console.log("Mongoose disconnected from MongoDB");
      isConnected = false;
    });

    if (typeof process !== "undefined" && process.on) {
      process.on("SIGINT", async () => {
        await mongoose.connection.close();
        console.log("MongoDB connection closed through app termination");
        process.exit(0);
      });
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    isConnected = false;
    throw error;
  }
}

export async function connectToDbEdge() {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    isConnected = true;
    console.log("MongoDB connected (Edge Runtime)");
  } catch (error) {
    console.error("Edge Runtime MongoDB connection error:", error);
    throw error;
  }
}
