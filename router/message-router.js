import express from "express";
import { sentMessage } from "../controllers/message-controller.js";
export const MessageRouter = express.Router();

MessageRouter.post("/api/send/message", sentMessage);

export default MessageRouter;
