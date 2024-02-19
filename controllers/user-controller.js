import express from "express";
import { users } from "../models/user-models.js";
import bcrypt from "bcrypt";
import { userSchemaValidation } from "../utils/joi-validation.js";
import { generateToken } from "../utils/jwt-helpers.js";

export const signUp = async (req, res) => {
  try {
    const requiredFields = ["full_name", "email", "phone", "password"];
    const { full_name, email, phone, password } = req.body;
    const { error, value } = userSchemaValidation.validate(req.body);
    if (error) {
      return res.status(404).send({ status: "404", message: error.message });
    }
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res
          .status(404)
          .send({ status: "404", message: "All Fields are required" });
      }
    }

    const existUser = await users.findOne({ email });
    if (existUser) {
      return res
        .status(404)
        .send({ status: "404", message: "User Already Registered" });
    }

    const user = new users({
      full_name,
      email,
      phone,
      password,
    });

    const saltedPassword = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, saltedPassword);
    const token = await generateToken(user);
    await user.save();
    res
      .status(200)
      .send({
        status: "200",
        message: "User Registerd Successfuly",
        data: { user, token },
      });
  } catch (error) {
    res.status(500).send({ status: "500", message: "Internal Server Error" });
  }
};

export const signIn = async (req, res) => {
  try {
    const requiredFields = ["email", "password"];
    const { email, password } = req.body;
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).send({
          status: false,
          message: `All Field is required`,
        });
      }
    }

    const existUser = await users.findOne({ email });
    if (!existUser || !(await bcrypt.compare(password, existUser.password))) {
      return res
        .status(404)
        .send({ status: "404", message: "Credentials Error" });
    }

    const token = await generateToken(existUser);
    res.status(200).send({
      status: "200",
      message: "USER LOGIN SUCCESSFULY",
      data: {
        existUser,
        token,
      },
    });
  } catch (error) {
    console.log("error------->", error.message);
    return res.status(404).send({
      status: 200,
      message: "SOMETHING WENT WRONGE",
      data: null,
    });
  }
};
