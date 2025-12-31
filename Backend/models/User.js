const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // unique login username
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    // full name
    name: {
      type: String,
      required: true,
      trim: true,
    },

    // email login
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    // user account status
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },

    // limits
    maxScreenLimit: {
      type: Number,
      default: 1,
      min: 1,
    },

    maxStorageSize: {
      type: Number, // GB
      default: 5,
      min: 1,
    },

    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
