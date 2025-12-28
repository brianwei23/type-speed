import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    wpm: Number,
    accuracy: Number,
    createdAt:{
        type: Date,
        default: Date.now
    }
    });