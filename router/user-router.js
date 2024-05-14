import express from "express";
import {
  signUp,
  signIn,
  getAllUsers,
  getSingleUser,
} from "../controllers/user-controller.js";
export const userRouter = express.Router();

userRouter.post("/api/signup", signUp);
userRouter.post("/api/login", signIn);
userRouter.get("/api/alluser", getAllUsers);
userRouter.get("/api/singleuser/:id", getSingleUser);

export default userRouter;
