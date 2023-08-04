const express = require("express");
const User = require("../models/user");
const bcryptjs = require("bcryptjs");

const authRouter = express.Router();

// SIGN UP
authRouter.post("/api/signup", async (req, res) => {
  try {
    // get the data from the client
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status().json({ msg: "User with same email already exists!" });
    }

    const hashedPassword = await bcryptjs.hash(password, 8);

    let user = User({
      email,
      password: hashedPassword,
      name,
    });

    user = await user.save();
    res.json({ user: user }); // res.json({ user });

    //post that data in database

    // return that data to the user
  } catch (error) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = authRouter;
