import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  image: String,
  emailVerfied: Date,
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  provider: String,
});

export const User = mongoose.models?.user || mongoose.model("user", userSchema);
