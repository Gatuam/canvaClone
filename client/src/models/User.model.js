import mongoose, { Schema } from "mongoose";

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
});

export default mongoose.models.user || mongoose.model("user", userSchema);

const designSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    width: {
        type: Number,
        require: true
    },
    Height: {
        type: Number,
        require: true
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
    imgaePreview: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",

    },
});
export const Design =
    mongoose.models.Design || mongoose.model("Design", designSchema);
