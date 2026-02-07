import express from "express";
import "dotenv/config";
import cors from "cors";

import connectDB from "./config/db.js";
import currentWeatherRouter from "./routes/weatherRoutes.js";
import searchWeatherRouter from "./routes/searchWeatherRouter.js";
import apiUsageRouter from "./routes/apiUsageRoutes.js";

const app = express();
const PORT = process.env.PORT || 3001;

connectDB();

// middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", apiUsageRouter);
app.use("/weather", currentWeatherRouter);
app.use("/weather", searchWeatherRouter);

app.get("/", (_, res) => {
  res.send("So Sunny API is running...");
});

app.listen(PORT, () => {
  console.log("Server is up and running", PORT);
});
