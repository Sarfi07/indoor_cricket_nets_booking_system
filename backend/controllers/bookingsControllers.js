// controllers/bookingController.js
import prisma from "../utils/prismaClient.js";
import asyncHandler from "express-async-handler";

export const getAvailability = asyncHandler(async (req, res) => {
  const { date, netId } = req.query;
  const day = new Date(date);

  const bookings = await prisma.booking.findMany({
    where: {
      netId: Number(netId),
      date: day,
    },
    select: { startTime: true, endTime: true },
  });

  // Return booked slots for that net & date
  res.json({ bookings });
});

export const createBooking = asyncHandler(async (req, res) => {
  const { netId, date, startTime, duration } = req.body;
  const userId = req.user.id;

  const start = new Date(startTime);
  const end = new Date(start.getTime() + duration * 60000);

  // Check for overlap
  const overlap = await prisma.booking.findFirst({
    where: {
      netId: Number(netId),
      date: new Date(date),
      AND: [
        { startTime: { lt: end } },
        { endTime: { gt: start } },
      ],
    },
  });

  if (overlap) {
    return res.status(400).json({ message: "Slot already booked" });
  }

  const booking = await prisma.booking.create({
    data: {
      userId,
      netId: Number(netId),
      date: new Date(date),
      startTime: start,
      endTime: end,
      duration,
    },
  });

  res.json(booking);
});

export const getMyBookings = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  console.log("Fetching bookings for user ID:", userId);
  const bookings = await prisma.booking.findMany({
    where: { userId }
  });
  res.json(bookings);
});

export const cancelBooking = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await prisma.booking.delete({ where: { id } });
  res.json({ message: "Booking cancelled" });
});
