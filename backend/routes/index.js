import express from "express";
import authRouter from "./authRoutes.js";
import userRouter from "./userRoutes.js";
import bookingsRoutes  from './bookingsRoutes.js'
import netRoutes from "./netRoutes.js";
import passport from "../config/passport.js";

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(201).json({ message: "Hello World!" });
});

router.use("/api/auth", authRouter);
router.use("/api/bookings", bookingsRoutes);
router.use("/api/users", userRouter);
router.use("/api/nets", netRoutes);

export default router;
