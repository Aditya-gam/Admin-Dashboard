import User from "../models/User.js";
import bcrypt from "bcrypt";
import Joi from "joi";
import genAuthToken from "../utils/genAuthToken.js";

export const loginUser = async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().min(3).max(200).required().email(),
    password: Joi.string().min(6).max(200).required(),
  });

  // Validate input
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if user already exists
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password...");

  //Verify Password
  //   const isValid = await bcrypt.compare(req.body.password, user.password);
  const isValid = req.body.password === user.password;
  if (!isValid) return res.status(400).send("Invalid email or password...");

  const token = genAuthToken(user);
  res.send(token);
};
