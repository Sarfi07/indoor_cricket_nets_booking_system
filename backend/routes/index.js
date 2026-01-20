import express from "express";
import authRouter from "./authRoutes.js";
import userRouter from "./userRoutes.js";
import bookingsRoutes  from './bookingsRoutes.js'
import netRoutes from "./netRoutes.js";
import { pool } from "../db.js";

const router = express.Router();

router.get('/health', async (req, res) => {
  try {
    const result = await pool.query('SELECT 1');
    res.json({ status: 'ok', db: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(201).json({ message: "Hello World!" });
});

router.use("/api/auth", authRouter);
router.use("/api/bookings", bookingsRoutes);
router.use("/api/user", userRouter);
router.use("/api/nets", netRoutes);

export default router;
