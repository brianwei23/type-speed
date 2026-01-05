import express from "express";
// cors allows requests from frontend
import cors from "cors";
// loads environment variables from .env
import dotenv from "dotenv";
// database connection
import connectDB from "./config/db.js";
// Auth routes
import authRoutes from "./routes/auth.js";
import sentenceRoutes from "./routes/sentences.js";
import resultsRoutes from "./routes/results.js"

// Load environment variables
dotenv.config({ path: "./server/.env" });
// MongoDB connection
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/sentences", sentenceRoutes);
app.use("/api/results", resultsRoutes);
app.get("/", (req, res) => {
    res.send("Typing speed API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`));