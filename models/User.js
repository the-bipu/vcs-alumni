import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      default: "",
    },
    fullName: {
      type: String,
      default: "",
    },
    profile: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
    dob: {
      type: Date,
      default: "",
    },
    joiningYear: {
      type: String,
      default: "",
    },
    passingYear: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      default: "",
    },
    userType: {
      type: String,
      default: "alumni",
    },
    accountType: {
      type: String,
      default: "private",
    },
    position: {
      type: String,
      default: "",
    },
    instagram: {
      type: String,
      default: "",
    },
    linkedIn: {
      type: String,
      default: "",
    },
    snapchat: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
