import express from "express";
import { signUp, signIn } from "../controllers/user-controller.js";
export const userRouter = express.Router();

userRouter.post("/api/signup", signUp);
userRouter.post("/api/login", signIn);

export default userRouter;
