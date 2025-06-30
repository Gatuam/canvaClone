
const designSchema = new mongoose.Schema({
    title: {
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
    mongoose.models?.design || mongoose.model("design", designSchema);
