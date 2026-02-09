import express from "express";
import "dotenv/config";
import cors from "cors";
import expressLayouts from "express-ejs-layouts";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";
import currentWeatherRouter from "./routes/weatherRoutes.js";
import searchWeatherRouter from "./routes/searchWeatherRouter.js";
import apiUsageRouter from "./routes/apiUsageRoutes.js";
import blockBrowser from "./middlewares/blockBrowser.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

connectDB();

// static files
app.use(express.static(path.join(__dirname, "public")));

// middleware
app.use(express.json());
app.use(cors());

// view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.set("layout", "./layouts/main");

app.use("/api", blockBrowser);

// API routes
app.use("/api", apiUsageRouter);

app.use("/api/weather", currentWeatherRouter);
app.use("/api/weather", searchWeatherRouter);

// Home page
app.get("/", (_, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log("Server is up and running on port", PORT);
});
