// routes/netRoutes.js
import express from "express";
import {
  getNets,
  getNetById,
  createNet,
  updateNet,
  deleteNet,
} from "../controllers/netController.js";
import authMiddleware from "../utils/authMiddleware.js";
import { adminOnly } from "../utils/roleMiddleware.js";

const router = express.Router();

// Public routes
router.get("/", getNets);
router.get("/:id", getNetById);

// Admin-only routes
router.post("/", authMiddleware("jwt"), adminOnly, createNet);
router.put("/:id", authMiddleware("jwt"),adminOnly, updateNet);
router.delete("/:id", authMiddleware("jwt"),adminOnly, deleteNet);

export default router;
