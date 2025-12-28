import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
    const {username, password} = req.body;

    const hash = await bcrypt.hash(password, 10);
    await User.create({username, passwordHash: hash});

    res.status(201).json({message: "User created successfully"});
});

router.post("/login", async (req, res) => {
    const {username, password} = req.body;

    const user = await User.findOne({username});
    if(!user) return res.status(401).json({error: "Invalid credentials"});

    const valid = await bcrypt.compare(password, user.passwordHash);
    if(!valid) return res.status(401).json({error: "Invalid credentials"});

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
    res.json({token})
});
export default router;