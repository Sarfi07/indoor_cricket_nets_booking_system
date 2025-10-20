import express from "express";
import passport from "../config/passport.js";
import authMiddleware from "../utils/authMiddleware.js";
import {
  signupUser,
  verifyUserToken,
  guestSignin,
  getDashboard,
  getAuthRoot,
} from "../controllers/authControllers.js";

const router = express.Router();

router.get("/", getAuthRoot);
router.get("/dashboard", getDashboard);
router.post("/signup", signupUser);
router.post("/verifyToken", verifyUserToken);
router.post("/guest-signin", guestSignin);
router.post("/login", authMiddleware("local"));

// OAuth Routes
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get("/google/callback", authMiddleware("google"));

export default router;
