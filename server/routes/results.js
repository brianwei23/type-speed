import express from "express";
import Result from "../models/Result.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
    try {
        console.log("Received result POST body:", req.body);
        const { wpm, accuracy, difficulty } = req.body;
        if (!difficulty) {
            console.warn("Difficulty missing in request body!");
        }

        const result = new Result({
            userId: req.user.id,
            wpm,
            accuracy,
            difficulty,
        });

        await result.save();
        console.log("Saved result:", result);
        res.status(201).json({message: "Result saved"});
    } catch (err) {
        console.error("Error saving result:", err);
        res.status(500).json({error: "Failed to save the result"});
    }
});

export default router;