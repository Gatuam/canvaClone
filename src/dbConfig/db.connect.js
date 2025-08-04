import mongoose from "mongoose";

// Track connection state
let isConnected = false;

export async function connectToDb() {
  // If already connected, return early
  if (isConnected) {
    console.log('Already connected to MongoDB');
    return;
  }

  // If connecting, wait for existing connection
  if (mongoose.connection.readyState === 1) {
    isConnected = true;
    return;
  }

  try {
    // Configure mongoose for better performance
    mongoose.set('strictQuery', false);
    
    // Connect with proper options
    await mongoose.connect(process.env.MONGO_URI, {
      bufferCommands: false, // Disable command buffering
      maxPoolSize: 10, // Connection pool size
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    });

    isConnected = true;
    console.log('MongoDB connected successfully');

    // Handle connection events
    mongoose.connection.on('connected', () => {
      console.log('Mongoose connected to MongoDB');
    });

    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
      isConnected = false;
    });

    mongoose.connection.on('disconnected', () => {
      console.log('Mongoose disconnected from MongoDB');
      isConnected = false;
    });

    // Handle app termination (Node.js runtime only, not Edge)
    if (typeof process !== 'undefined' && process.on) {
      process.on('SIGINT', async () => {
        await mongoose.connection.close();
        console.log('MongoDB connection closed through app termination');
        process.exit(0);
      });
    }

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    isConnected = false;
    throw error; // Re-throw to handle in calling code
  }
}

// Alternative connection function specifically for Edge Runtime
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
    console.log('MongoDB connected (Edge Runtime)');

  } catch (error) {
    console.error('Edge Runtime MongoDB connection error:', error);
    throw error;
  }
}