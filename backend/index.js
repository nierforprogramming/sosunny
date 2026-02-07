import express from "express";
import "dotenv/config";
import cors from "cors";

import connectDB from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 3001;

connectDB();

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("So Sunny API is running...");
});

app.listen(PORT, () => {
  console.log("Server is up and running", PORT);
});
