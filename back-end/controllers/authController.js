const User = require("../models/User");
const bcrypt = require("bcrypt");

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const validatePassword = (password) => {
  return password.length >= 6;
};

const validateFullName = (fullname) => {
  return fullname.length >= 2;
};

exports.registerUser = async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!validateFullName(fullName)) {
    return res.status(400).json({
      errors: [{ msg: "Full name must be at least 2 characters long" }],
    });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ errors: [{ msg: "Invalid email" }] });
  }

  if (!validatePassword(password)) {
    return res.status(400).json({
      errors: [{ msg: "Password must be at least 6 characters long" }],
    });
  }

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }

    user = new User({
      fullName,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.status(201).json({ msg: "User registered successfully", fullName });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!validateEmail(email)) {
    return res.status(400).json({ errors: [{ msg: "Invalid email" }] });
  }

  if (!validatePassword(password)) {
    return res.status(400).json({ errors: [{ msg: "Invalid password" }] });
  }

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }

    res
      .status(200)
      .json({
        msg: "Login successful",
        user: user._id,
        fullName: user.fullName,
      });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
