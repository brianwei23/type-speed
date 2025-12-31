import express from "express";
import Sentence from "../models/Sentences.js";

const router = express.Router();

// Get the random sentence based on difficulty level
router.get("/:difficulty", async (req, res) => {
    const {difficulty} = req.params;
    try {
        const [sentence] = await Sentence.aggregate([
            {$match: {difficulty}},
            {$sample: {size: 1}} // Randomly select one sentence
        ]);
        if (!sentence){
            return res.status(404).json({error: "No sentence was found."});
        }
        res.json({sentence: sentence.text});
    } 
    catch (err){
        console.error(err);
        res.status(500).json({error: "Server error."});
    }
});
export default router;