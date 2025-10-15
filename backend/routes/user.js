import express from "express";
import prisma from "../utils/prismaClient.js";
import asyncHandler from "express-async-handler";
import multer from "multer";
import { storage } from "../config/cloudinary.js";
import bcrypt from "bcrypt";

const router = express.Router();
const upload = multer({ storage });

router.get("/", function (req, res, next) {
  res.status(201).json({ message: "Hello User! " });
});

export default router;
