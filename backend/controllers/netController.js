// this is for admin to manage net like create, edit, delete nets
// controllers/netController.js
import prisma from "../utils/prismaClient.js";
import asyncHandler from "express-async-handler";

/**
 * @desc    Get all nets
 * @route   GET /api/nets
 * @access  Public
 */
export const getNets = asyncHandler(async (req, res) => {
  const nets = await prisma.net.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  res.json(nets);
});

/**
 * @desc    Get a single net by ID
 * @route   GET /api/nets/:id
 * @access  Public
 */
export const getNetById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const net = await prisma.net.findUnique({
    where: { id: Number(id) },
  });
  if (!net) return res.status(404).json({ message: "Net not found" });
  res.json(net);
});

/**
 * @desc    Create a new net (Admin only)
 * @route   POST /api/nets
 * @access  Admin
 */
export const createNet = asyncHandler(async (req, res) => {
  const { name, } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name and ratePerHour are required" });
  }

  const newNet = await prisma.net.create({
    data: { name },
  });

  res.status(201).json({ message: "Net created successfully", net: newNet });
});

/**
 * @desc    Update net details (Admin only)
 * @route   PUT /api/nets/:id
 * @access  Admin
 */
export const updateNet = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const updatedNet = await prisma.net.update({
    where: { id: Number(id) },
    data: { name },
  });

  res.json({ message: "Net updated successfully", net: updatedNet });
});

/**
 * @desc    Delete a net (Admin only)
 * @route   DELETE /api/nets/:id
 * @access  Admin
 */
export const deleteNet = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await prisma.net.delete({
    where: { id: Number(id) },
  });

  res.json({ message: "Net deleted successfully" });
});
