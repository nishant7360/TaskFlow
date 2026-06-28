import express from "express";
import cors from "cors";
import morgan from "morgan";

import taskRoutes from "./routes/taskRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://task-flow-alpha-sandy.vercel.app",
    ],
    credentials: true,
  }),
);

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/v1/tasks", taskRoutes);
app.use(errorHandler);

export default app;
