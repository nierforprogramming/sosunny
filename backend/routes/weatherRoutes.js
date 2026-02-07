import express from "express";

import { getCurrentWeather } from "../controller/weatherContoller.js";
import { apiUsageMiddleware } from "../middlewares/apiUsageMiddleware.js";

const currentWeatherRouter = express.Router();

currentWeatherRouter.get("/current", apiUsageMiddleware, getCurrentWeather);

export default currentWeatherRouter;
