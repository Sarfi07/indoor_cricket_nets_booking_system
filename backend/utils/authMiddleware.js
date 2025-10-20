import passport from "passport";
import { generateToken } from "./jwtUtils.js";
import "dotenv/config";
import prisma from "./prismaClient.js";

const authMiddleware = (strategyName) => {
  return (req, res, next) => {
    // Do not use failureRedirect for API flows
    passport.authenticate(
      strategyName,
      { session: false },
      async (err, user, info) => {
        try {
          if (err) {
            console.error("Authentication error:", err);
            return next(err);
          }

          if (!user) {
            console.log("No user found, auth info:", info);
            return res.status(401).json({ message: "Unauthorized", info });
          }

          // fetch minimal user from DB
          const userObj = await prisma.user.findUnique({
            where: { id: user.id },
            select: {
              id: true,
              name: true,
              username: true,
              email: true,
              role: true,
              createdAt: true,
              updatedAt: true,
            },
          });

          if (strategyName === "local") {
            // local login => return token + user
            const token = generateToken(userObj || user);
            return res.status(200).json({ token, user: userObj });
          }

          if (strategyName === "jwt") {
            // JWT strategy => attach user and continue to next middleware/route
            req.user = userObj || user;
            return next();
          }

          // other strategies (OAuth) => redirect to frontend with token
          const token = generateToken(userObj || user);
          return res.redirect(
            `${process.env.FRONTEND_URL}/oauth-callback?token=${encodeURIComponent(token)}`
          );
        } catch (e) {
          console.error("Unexpected error in auth callback:", e);
          return res.status(500).json({ message: "Server error during authentication" });
        }
      }
    )(req, res, next);
  };
};

export default authMiddleware;
