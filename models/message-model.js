import mongoose from "mongoose";
import { Schema } from "mongoose";

const chat_messages_schema = new Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    message: {
      type: mongoose.Schema.Types.String,
    },
  },
  {
    timestamps: true,
  }
);

export const chatMessages = new mongoose.model(
  "chatMessages",
  chat_messages_schema
);
