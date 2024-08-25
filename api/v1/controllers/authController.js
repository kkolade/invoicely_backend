import asyncHandler from 'express-async-handler';
import { validationResult } from 'express-validator';

import { hashPassword } from '../helpers/authHelper.js';
import User from '../models/userModel.js';

const signup = asyncHandler(async (req, res) => {
  const { username, email, password, repeatPassword } = req.body;

  // Validate user input
  const signupValidationErrors = validationResult(req);
  if (!signupValidationErrors.isEmpty()) {
    const errors = signupValidationErrors.array().map((error) => error.msg);
    return res.status(400).json({ errors, userInput: { username, email } }); // Send errors as a JSON response
  }

  // check if user exist
  const existUser =
    (await User.findOne({ username })) || (await User.findOne({ email }));

  if (existUser) {
    res.json({
      message: 'User already exist!',
      userInput: { username, email },
      success: false,
    });
  } else {
    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      repeatPassword: repeatPassword,
    });
    req.session.userId = user._id;
    res.status(201).json({
      message: 'User Created',
      success: true,
    });
  }
});

const login = asyncHandler(async (req, res) => {
  res.json({
    message: 'Logged in',
  });
});

const logout = asyncHandler(async (req, res) => {
  res.json({
    message: 'Logged out',
  });
});

export { login, logout, signup };
