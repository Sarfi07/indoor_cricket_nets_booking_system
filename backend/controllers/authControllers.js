import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import prisma from "../utils/prismaClient.js";
import { generateToken, verifyToken } from "../utils/jwtUtils.js";
import { v4 as uuidv4 } from "uuid";

// @desc Signup user
export const signupUser = asyncHandler(async (req, res) => {

  const { username, name, password, email, role } = req.body || {};

  // basic validation
  if (!username || !email || !password || !String(username).trim() || !String(email).trim() || !String(password).trim()) {
    return res.status(400).json({
      message: "username, email and password are required.",
      success: false,
      receivedKeys: Object.keys(req.body || {}),
    });
  }

  // If requesting ADMIN role, enforce stricter checks
  if (role === "ADMIN") {
    // must provide password (already checked above) and authorization to create admin
    const isRequesterAdmin = req.user && req.user.role === "ADMIN"; // requires route to be protected if used
    const hasAdminSecret = req.body.adminSecret && req.body.adminSecret === process.env.ADMIN_SECRET;
    console.log(hasAdminSecret)

    if (!isRequesterAdmin && !hasAdminSecret) {
      return res.status(403).json({
        message: "Not allowed to create admin user. Provide valid admin secret or be an authenticated admin.",
        success: false,
      });
    }
  }

  try {
    // check if username or email exists
    const [userByUsername, userByEmail] = await Promise.all([
      prisma.user.findUnique({ where: { username } }),
      prisma.user.findUnique({ where: { email } }),
    ]);

    if (userByUsername) {
      return res.status(403).json({
        message: "Username already exists, try a different one.",
        success: false,
      });
    }

    if (userByEmail) {
      return res.status(403).json({
        message: "Email already in use, try a different one.",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createData = {
      username,
      name,
      email,
      password: hashedPassword,
    };

    // only set ADMIN role when explicitly requested and validated above
    if (role === "ADMIN") {
      createData.role = "ADMIN";
    }

    const user = await prisma.user.create({
      data: createData,
    });

    return res.json({ message: "Signed up successfully.", success: true, user });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({ message: "Signup failed", error: err.message });
  }
});

// @desc Verify JWT Token
export const verifyUserToken = asyncHandler(async (req, res) => {
  const authHeader = req.headers.authorization;
  console.log("Verifying token:", authHeader);
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization header missing or malformed." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyToken(token);
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    return res.json({ valid: true, user });
  } catch (err) {
    return res.status(401).json({ valid: false, message: "Invalid or expired token.", error: err.message });
  }
});

// @desc Guest Signin
export const guestSignin = asyncHandler(async (req, res) => {
  try {
    const guestUsername = `guest_${uuidv4()}`;

    const guestUser = await prisma.user.create({
      data: {
        id: uuidv4(),
        username: guestUsername,
        name: "Guest user",
      },
    });

    const token = generateToken(guestUser);
    return res.json({ token, user: guestUser });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// @desc Dashboard example
export const getDashboard = (req, res) => {
  res.json({ message: "Dashboard route" });
};

// @desc Default route
export const getAuthRoot = (req, res) => {
  // get all user details except password
  res.json({ message: "Local auth route" });
};
