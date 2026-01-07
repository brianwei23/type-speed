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

import path from "path";
import { fileURLToPath } from "url";

// Load environment variables
dotenv.config();
// MongoDB connection
connectDB();
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/sentences", sentenceRoutes);
app.use("/api/results", resultsRoutes);

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
    res.sendFile(
        path.join(__dirname, "../client/build/index.html")
    );
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`));