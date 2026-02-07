import mongoose from "mongoose";

const APIAppSchema = new mongoose.Schema({
  appName: {
    type: String,
    required: [true, "App name is required"],
    minlength: [1, "App name cannot be empty"],
  },

  apiCallsUsed: {
    type: Number,
    default: 0,
  },

  limit: {
    type: Number,
  },
  resetAt: {
    type: Date,
  },
});

export default mongoose.model("APIApp", APIAppSchema);
