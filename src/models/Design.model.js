
const designSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    width: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    data: mongoose.Schema.Types.Mixed,
    imagePreview: String,
    createAt: {
        type: Date,
        default: Date.now,
    },   
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",

    },
});
export const Design =
    mongoose.models?.design || mongoose.model("design", designSchema);
