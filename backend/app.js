import http from "http";
import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes/index.js";
import passport from "./config/passport.js";
import cors from "cors";
import InitializeWSServer from "./utils/ws.js";

const app = express();
const server = http.createServer(app);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(passport.initialize());
app.use("/", indexRouter);

// catch 404 and return JSON
app.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
});

// error handler — return JSON and log server errors
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const isServerError = status >= 500;
  console.error(err); // log full error

  res.status(status).json({
    error: err.name || "Error",
    message:
      req.app.get("env") === "development" || !isServerError
        ? err.message
        : "Internal Server Error",
  });
});

InitializeWSServer(server);
server.listen(3054, () => {
  console.log("Server is running on port 3054");
});
