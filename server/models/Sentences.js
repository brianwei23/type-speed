import mongoose from "mongoose";

// Define the Sentence schema which contains the text and its difficulty level
const sentenceSchema = new mongoose.Schema({
    text: { type: String, required: true},
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
});

export default mongoose.model("Sentence", sentenceSchema);