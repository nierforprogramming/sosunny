import express from "express";

import { createAPIApp } from "../controller/apiUsageController.js";

const apiUsageRouter = express.Router();

apiUsageRouter.post("/createapp", createAPIApp);

export default apiUsageRouter;
