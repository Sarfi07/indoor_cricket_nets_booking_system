// routes/bookingRoutes.js
import express from "express";
import { createBooking, getAvailability, getMyBookings, cancelBooking } from "../controllers/bookingsControllers.js";
import authMiddleware from "../utils/authMiddleware.js";

const router = express.Router();

router.get("/availability", getAvailability);
router.post("/", authMiddleware("jwt"), createBooking);
router.get("/my", authMiddleware("jwt"), getMyBookings);
router.delete("/:id", authMiddleware("jwt"), cancelBooking);

export default router;
