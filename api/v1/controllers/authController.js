// import asyncHandler from "express-async-handler";

const signup = (req, res) => {
  res.json({
    message: 'Registered',
  });
};
const login = (req, res) => {
  res.json({
    message: 'Logged in',
  });
};
const logout = (req, res) => {
  res.json({
    message: 'Logged out',
  });
};

export { login, logout, signup };
