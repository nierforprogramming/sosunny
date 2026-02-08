import APIAppSchema from "../models/APIAppSchema.js";
import { getNextResetDate } from "../utils/utils.js";

export const apiUsageMiddleware = async (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  //   698750ac14cbd6429397b181;

  try {
    if (!apiKey) {
      return res
        .status(401)
        .json({ success: false, message: "API key is required" });
    }

    let apiApp = await APIAppSchema.findById(apiKey);

    if (!apiApp) {
      return res
        .status(403)
        .json({ success: false, message: "Invalid API key" });
    }

    const now = new Date();
    // Initialize reset date if missing
    if (!apiApp.resetAt) {
      apiApp.resetAt = getNextResetDate();
      apiApp.apiCallsUsed = 0;
    }

    // Reset monthly quota
    if (now >= apiApp.resetAt) {
      apiApp.apiCallsUsed = 0;
      apiApp.resetAt = getNextResetDate();
    }

    // Block if limit exceeded
    if (apiApp.apiCallsUsed >= apiApp.limit) {
      return res.status(429).json({
        success: false,
        message: `API limit reached. Your quota will reset on ${apiApp.resetAt.toDateString()}.`,
      });
    }

    // Soft warning
    if (apiApp.apiCallsUsed >= apiApp.limit * 0.9) {
      return res.status(429).json({
        success: false,
        message: `You are close to your limit. Remaining calls this month: ${
          apiApp.limit - apiApp.apiCallsUsed
        }`,
      });
    }

    // Count the call
    apiApp.apiCallsUsed += 1;
    await apiApp.save();

    req.appData = apiApp;
  } catch (error) {
    console.log(error);

    res.status(500).json({ success: false, message: error.message });
  }
  next();
};
