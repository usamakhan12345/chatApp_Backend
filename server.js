import express from "express";
import { connectDb } from "./config/db.js";
import { userRouter } from "./router/user-router.js";
import { MessageRouter } from "./router/message-router.js";
import { Server } from "socket.io";
import { createServer } from "node:http";

import cors from "cors";
import dotenv from "dotenv";
const app = express();

const PORT = process.env.PORT || 8000;
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
dotenv.config();
connectDb();

app.use(express.json());
app.use(cors());
app.use([userRouter]);
app.use([MessageRouter]);
app.use(express.urlencoded({ extended: true }));

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  socket.on("chat-message", (msg) => {
    console.log("message ", msg);
    io.emit("all-chat-messages", msg);
  });
  socket.broadcast.emit("h1");
});

app.get("/", (req, res) => {
  res.send("Server is working");
});

server.listen(PORT, () => {
  console.log("app is running on ", PORT);
});
