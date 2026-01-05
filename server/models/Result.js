import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    wpm: {
        type: Number,
        required: true,
    },
    accuracy: {
        type: Number,
        required: true,
    },
    difficulty: {
        type: String,
        enum: ["easy", "medium", "hard"],
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    });

export default mongoose.model("Result", resultSchema);