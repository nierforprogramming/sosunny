import APIAppSchema from "../models/APIAppSchema.js";
import { sanitizeAppName } from "../utils/utils.js";

export async function createAPIApp(req, res) {
  try {
    let { appName, limit } = req.query;

    if (typeof appName !== "string") {
      return res.status(400).json({
        success: false,
        message: "App name is required",
      });
    }

    appName = sanitizeAppName(appName);

    if (!appName) {
      return res.status(400).json({
        success: false,
        message: "App name cannot be empty",
      });
    }

    const createdApp = await APIAppSchema.create({ appName, limit });

    return res.status(201).json({
      success: true,
      message: "New app created",
      app: createdApp,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}
