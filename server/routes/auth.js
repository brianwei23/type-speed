// Express used for API routing
import express from "express";
// Hashing passwords
import bcrypt from "bcrypt";
// JWT authentication
import jwt from "jsonwebtoken";
// User model for database interaction
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
    const {username, password} = req.body;
    //Hash password
    const hash = await bcrypt.hash(password, 10);
    // Create new user document
    await User.create({username, passwordHash: hash});

    res.status(201).json({message: "User created successfully"});
});

router.post("/login", async (req, res) => {
    const {username, password} = req.body;
    // Find username
    const user = await User.findOne({username});
    if(!user) return res.status(401).json({error: "Invalid credentials"});
    // Compare passwords
    const valid = await bcrypt.compare(password, user.passwordHash);
    if(!valid) return res.status(401).json({error: "Invalid credentials"});
    // Generate JWT
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
    // Send token to client
    res.json({token})
});
export default router;