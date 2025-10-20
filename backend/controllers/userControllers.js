// controllers/userController.js
import prisma from "../utils/prismaClient.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";

// Get current user (decoded from JWT)
export const getCurrentUser = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      username: true,
      name: true,
      email: true,
      profileImage: true,
      createdAt: true,
    },
  });
  res.json(user);
});

// Update profile
export const updateProfile = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { name, email, bio, profileImage, password } = req.body;

  const data = { name, email, bio, profileImage };

  if (password) {
    data.password = await bcrypt.hash(password, 10);
  }

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data,
    select: {
      id: true,
      username: true,
      name: true,
      email: true,
      bio: true,
      profileImage: true,
    },
  });

  res.json({
    message: "Profile updated successfully",
    user: updatedUser,
  });
});

// Get all users (Admin only)
export const getAllUsers = asyncHandler(async (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ message: "Access denied" });
  }
  const users = await prisma.user.findMany({
    select: { id: true, username: true, name: true, email: true },
  });
  res.json(users);
});
