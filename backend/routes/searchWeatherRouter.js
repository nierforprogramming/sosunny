import express from "express";

import { searchWeather } from "../controller/weatherContoller.js";
import { apiUsageMiddleware } from "../middlewares/apiUsageMiddleware.js";

const searchWeatherRouter = express.Router();

searchWeatherRouter.get("/find_places", apiUsageMiddleware, searchWeather);

export default searchWeatherRouter;
