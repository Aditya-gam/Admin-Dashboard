import User from "../models/User.js";
import bcrypt from "bcrypt";
import Joi from "joi";
import genAuthToken from "../utils/genAuthToken.js";

export const registerUser = async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(200).required().email(),
    password: Joi.string().min(6).max(200).required(),
    city: Joi.string(),
    state: Joi.string(),
    country: Joi.string(),
    occupation: Joi.string(),
    phoneNumber: Joi.string(),
    transactions: Joi.array(),
    role: Joi.string().valid("user", "admin", "superadmin").default("admin"),
  });

  // Validate input
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if user already exists
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already exists....");

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    occupation: req.body.occupation,
    phoneNumber: req.body.phoneNumber,
    transactions: req.body.transactions,
    role: req.body.role,
  });

  // const salt = await bcrypt.genSalt(10);

  // user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  const token = genAuthToken(user);

  res.send(token);
};
