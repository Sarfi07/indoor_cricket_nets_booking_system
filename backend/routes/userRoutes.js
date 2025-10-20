
// routes/userRoutes.js
import express from "express";
import { getCurrentUser, updateProfile, getAllUsers } from "../controllers/userControllers.js";
import authMiddleware from "../utils/authMiddleware.js";

const router = express.Router();

// Protected routes
router.get("/me", authMiddleware("jwt"), getCurrentUser);
router.put("/update", authMiddleware("jwt"), updateProfile);

// Admin-only
router.get("/", authMiddleware("jwt"), getAllUsers);

export default router;
