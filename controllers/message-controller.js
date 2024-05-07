import { chatMessages } from "../models/message-model.js";

export const sentMessage = async (req, res) => {
  try {
    const { sender, content } = req.body;
    if (!sender || !content) {
      return res
        .status(404)
        .send({ status: "404", message: "All fields are required" });
    }

    const userMessage = new chatMessages({
      ...req.body,
    });
    await userMessage.save();

    return res
      .status(200)
      .send({ status: 200, message: "message sent successfuly" });
  } catch (error) {
    res.status(400).send({ status: "404", message: error.message });
  }
};
