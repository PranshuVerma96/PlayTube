import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      requried: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true, // ager app isko search me user karte he tabi index true kiya he
    },
    email: {
      type: String,
      requried: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      requried: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, // cloudinary url
      requried: true,
    },
    coverImage: {
      type: String, // cloudinary url
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
