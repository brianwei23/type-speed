import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    // Expecting Bearer
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({error: "No token provided"});
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Attach the user info to request
        req.user = {
            id: decoded.id,
        };
        next();
    } catch (err) {
        return res.status(401).json({error: "Invalid token"});
    }
};

export default authMiddleware;