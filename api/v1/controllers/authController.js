import asyncHandler from 'express-async-handler';

import User from '../models/userModel.js';

import { validationResult } from 'express-validator';
import { comparePassword, hashPassword } from '../helpers/authHelper.js';

// Register User
const signup = asyncHandler(async (req, res) => {
  const { username, email, password, repeatPassword } = req.body;

  // Validate user input
  const signupValidationErrors = validationResult(req);
  if (!signupValidationErrors.isEmpty()) {
    const errors = signupValidationErrors.array().map((error) => error.msg);
    return res.status(400).json({ errors, userInput: { username, email } });
  }

  // check if user exist
  const existUser =
    (await User.findOne({ username })) || (await User.findOne({ email }));

  if (existUser) {
    res.json({
      message: 'Email is already registered. Try to login instead',
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

// User login
const login = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // validate user input
  const loginValidationErrors = validationResult(req);

  if (!loginValidationErrors.isEmpty()) {
    const errors = loginValidationErrors.array().map((error) => error.msg);
    return res.status(400).json({ errors, userInput: { username, email } });
  }

  // check if user exist
  const existUser =
    (await User.findOne({ username })) || (await User.findOne({ email }));

  if (!existUser) {
    res.status(400).json({
      message: 'Invalid input',
      userInput: { username, email },
      success: false,
    });
  } else {
    const passwordIsValid = comparePassword(password, existUser.password);
    if (passwordIsValid) {
      req.session.userId = existUser._id;
      res.status(200).json({
        message: 'Logged in',
        success: true,
      });
    }
  }
});

const logout = asyncHandler(async (req, res) => {
  res.json({
    message: 'Logged out',
  });
});

export { login, logout, signup };
