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

router.get("/leaderboard", async (req, res) => {
    try {
        const leaderboard = await Result.aggregate([
            // Sort highest speed first
            { $sort: {wpm: -1} },
            // One entry per user
            {
                $group: {
                    _id: {
                        userId: "$userId",
                        difficulty: "$difficulty",
                    },
                    bestWPM: {$first: "$wpm"},
                },
            },

            // Sort again
            {$sort: {bestWPM: -1}},

            // Group by difficulty level
            {
                $group: {
                    _id: "$_id.difficulty",
                    records: {
                        $push: {
                            userId: "$_id.userId",
                            wpm: "$bestWPM",
                        },
                    },
                },
            },
            // Only top 3 per difficulty
            {
                $project: {
                    _id: 0,
                    difficulty: "$_id",
                    records: { $slice: ["$records", 3]},
                }
            },
            // Username lookup
            {
                $lookup: {
                    from: "users",
                    localField: "records.userId",
                    foreignField: "_id",
                    as: "users",
                },
            },
            {
                $project: {
                    difficulty: 1,
                    records: {
                        $map: {
                            input: "$records",
                            as: "record",
                            in: {
                                wpm: "$$record.wpm",
                                username: {
                                    $arrayElemAt: [
                                        "$users.username",
                                        {
                                            $indexOfArray:[
                                                "$users._id",
                                                "$$record.userId",
                                            ],
                                        },
                                    ],
                                },
                            },
                        },
                    },
                },
            },
        ]);
        res.json(leaderboard);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: "Failed to fetch leaderboard"});
    }
});

export default router;