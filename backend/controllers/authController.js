const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

// helper
const hashPassword = async (password) => await bcrypt.hash(password, 10);
const comparePassword = async (password, hashed) => await bcrypt.compare(password, hashed);

// register
const registerController = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) return res.send({ message: "All fields required" });

    const existing = await userModel.findOne({ email });
    if (existing) return res.send({ message: "User already registered" });

    const hashed = await hashPassword(password);
    const user = new userModel({ name, email, password: hashed, role: role || "user" });
    await user.save();

    res.status(201).send({ success: true, message: "User Registered", user });
  } catch (err) {
    res.status(500).send({ success: false, message: "Registration error", err });
  }
};

// login
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) return res.status(404).send({ message: "Not registered" });

    const match = await comparePassword(password, user.password);
    if (!match) return res.status(400).send({ message: "Invalid password" });

    const token = JWT.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.send({
      success: true,
      message: "Login successful",
      user: { _id: user._id, name: user.name, email: user.email, role: user.role },
      token
    });
  } catch (err) {
    res.status(500).send({ message: "Login error", err });
  }
};

module.exports = { registerController, loginController };
