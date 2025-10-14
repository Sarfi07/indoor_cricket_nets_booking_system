import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(201).json({ message: "Hello World! Welcome to Nexa X Online Booking System Backend" });
});

export default router;
